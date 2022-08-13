import { db } from "./config/conexion.dexie.js"
import { Axios } from "axios"

const Url = 'http://localhost:3000/'
async function inyectScript(path, tabId){
    const options = {
        target: { tabId },
        files: [path]
    }
    return chrome.scripting.executeScript(options)
}

async function inyectScrapCandidates(tabId){
    return inyectScript("scripts/scrapCandidates.js",tabId)
}

chrome.action.onClicked.addListener((tab)=>{
    console.log('click')
    inyectScrapCandidates(tab.id)
})

export function addUrlParams(url, urlParams) {
    return url.replace(/\?.+/,'?'+urlParams.toString());
}

async function agregarperfil(link,viejoid){
    /* setInterval(chrome.tabs.remove,10000,viejoid).then(res=>console.log(res)).catch(rej=>console.log(rej)) */
    console.log("cree perfil")
    await chrome.tabs.remove(viejoid)
    const { id } = await chrome.tabs.create({url: link})
    return id
}

chrome.runtime.onConnect.addListener((port) =>{
    const secureChannels = ['secureChannelScrap','secureChannelScrapProfile']
    if(!(secureChannels.includes(port.name)))
        throw new Error('Not secure Channel')
    switch (port.name){
        case secureChannels[0]:
            console.log('sc1')
            port.onMessage.addListener(async (msg, {sender:{tab: {id: tabId, url: tabUrl}}}) => {
                const UrlParams = new URLSearchParams(tabUrl.match(/\?.+/)[0].replace('?',''))
				const page = Number(UrlParams.get('page') ?? 1)
                const nextpage = page + 1
                UrlParams.set('page', nextpage)
                const newUrl = addUrlParams(tabUrl,UrlParams)
                
                /*Guardar lista de urls*/
                const Data = JSON.stringify({
                    datos: msg.URLsCandidates
                })
                const otherPram={
                    headers:{
                        "content-type":"application/json; charset=UTF-8"
                    },
					body: Data,
                    method: 'POST'
                }

                fetch(Url+'urls',otherPram)
				.then(data=>console.log(data))
				.catch(err=>console.log(err))
                
                /* se modifica la cantidad segun cuantas paginas se desea escrapear el maximo es 100*/
                // Por ahora esta con 2 paginas*/
                if(nextpage <= 0){
                    chrome.tabs.remove(tabId)
                    const {id} = await chrome.tabs.create({url: newUrl,})
                    inyectScrapCandidates(id)
                }else{ 
                    const otherParam={
                        headers:{
                            "content-type":"application/json; charset=UTF-8"
                        },
                        method: 'GET'
                    }
                    console.log("GET")
                    fetch(Url+'urls',otherParam)
                    .then(data => data.json())
                    .then(async function (result){
                        let tamaño = Object.keys(result).length
                        let viejoid = tabId
                        for(let i=0; i < tamaño; i++){
                            for (let link of result[i]['datos']){
                                let id = await agregarperfil(link,viejoid)
                                await inyectScript('scripts/scrapper.js', id)             
                                viejoid=id
                            }
                        }
                    })
                    .catch(err=>console.log(err)) 
                }
            })
            break;
        case secureChannels[1]:
            console.log('sc2')
            port.onMessage.addListener(async (profile, {sender:{tab: {id: tabId}}})=>{
                const Data = JSON.stringify(profile.profile)
                console.log(Data)
                const otherPram={
                    headers:{
                        "content-type":"application/json; charset=UTF-8"
                    },
					body: Data,
                    method: 'POST',
                }
                await fetch(Url+'PersonaInfo',otherPram)
				.then(data=>console.log(data))
				.catch(err=>console.log(err))
                console.log("agregue")
            })
            break;
        default:
            break;
    }
});