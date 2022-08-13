import axios from "axios";
import dayjs from "dayjs";
import { profileSelectors } from "../config/scrapperSelectors";
import { getCookie } from "../utils/cookie";
import { $ , $$ } from "../utils/selectors";
import { waitForScroll, waitForSelector } from "../utils/waitFor";

/*
Tipo de dato de emtrada para $
 #    selector id 
 .    selector por clase
 nada selector elemento 
*/
//link andreina https://www.linkedin.com/voyager/api/identity/profiles/andreina-nathaly-rodriguez-martinez/profileContactInfo


async function getContactInfo(){
    try{

        const token = getCookie('JSESSIONID', document.cookie)
            
        const [contactInfoName] = $(profileSelectors.contactInfo).href.match(/in\/.+\/o/g) ?? []

        const contactInfoURL = `https://www.linkedin.com/voyager/api/identity/profiles${contactInfoName.substring(2,contactInfoName.length-1)}profileContactInfo`
        
        const {data: {data}} = await axios.get(contactInfoURL, {
            headers:{
                accept: 'application/vnd.linkedin.normalized+json+2.1',
                'csrf-token': token,
            }
        })
        return data
    } catch(error){
        console.log("file: scrapper.js ~ line 30 ~ getContactInfor ~ error", error)
        throw new Error('error al obtener info del contacto')
    }
    
}

function getEspecificInfo(selector){
    try {
        //'#education ~ .pvs-list__outer-container > ul > li'
        const Elements = $$(selector)
        return Elements.map((listItem)=>{
            if(!$('.pvs.entity__path-node',listItem)){
                const [title, enterprise, dateStringInfo] = $$('span[aria-hidden]',listItem).map(element => element.textContent)
                
                const [parseRawData] = dateStringInfo.match(/.+·|\d{4} - \d{4}/) ?? []
                
                const [startDate, endDate] = (parseRawData?.replace(/\s|·/g,'').split("-") ?? [])
                .map(rawDateElement => dayjs(rawDateElement).isValid() ? dayjs(rawDateElement).toDate(): null)
                
                return ({
                    title,
                    enterprise,
                    dateStringInfo,
                    startDate,
                    endDate
                })
            }
        })  
    } catch (error) {
        console.log('file:scrapper.js ~line 60 ~ getEspecificInfo ~ error', error)
    }
}

async function scrap(){
    try {
        const documento = $('body')
        console.log('inicio de scrap')
        await waitForSelector('h1')
        await waitForScroll()
        const name = $(profileSelectors.name).textContent
        //const name = getEspecificInfo(profileSelectors.name)
    
        const contactInfo = await getContactInfo()
    
        const experienceTitles = getEspecificInfo(profileSelectors.experiencesElements)
    
        const educationTitles = getEspecificInfo(profileSelectors.educationsElements)
    
        const profile = {
            name,
            contactInfo: contactInfo,
            experienceTitles,
            educationTitles
        }
        const port = chrome.runtime.connect({ name: 'secureChannelScrapProfile' });
        port.postMessage({ profile, document });
        
        console.log(profile)   
    } catch (error) {
        console.log('file:scrapper.js ~ line 80 ~ scrap ~error', error)
    }
}
scrap()
