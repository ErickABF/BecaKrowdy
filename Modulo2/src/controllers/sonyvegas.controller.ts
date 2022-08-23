import { spawn } from 'child_process'
import { mkdirSync, existsSync, appendFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import uuid4 from "uuid4";

class SonyVegasByBootcamp {
    dirVideos: string;
    dirVideoscortados: string;
    dirVideosdescargados: string;
    dirVideosconfondo: string;
    dirVideosagrupados: string;
    extensionVideo: string
    constructor(){
        this.dirVideos = `${__dirname.split('/').slice(0,5).join('/')}/srcvideos`
        this.dirVideosdescargados = `${__dirname.split('/').slice(0,5).join('/')}/srcvideosdescargados`
        this.dirVideoscortados = `${__dirname.split('/').slice(0,5).join('/')}/srcvideoscortados`
        this.dirVideosconfondo = `${__dirname.split('/').slice(0,5).join('/')}/srcvideosconfondo`
        this.dirVideosagrupados = `${__dirname.split('/').slice(0,5).join('/')}/srcvideosagrupados`
        this.extensionVideo = '.mp4'
    }
    async python(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('python2',(args), opts)
                console.log(child.spawnargs)
                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }
    async cd(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('cd',(args), opts)
                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }
    async curl(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('curl',(args), opts)
                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }
    async libre(args: any){
        try {
            console.log('entre al cambio de nombre')
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn(' ',(args), opts)
                
                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }
    /* async movervideos(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('mv', (args), opts)

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    } */
    async youtubedl(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('youtube-dl', (args), opts)

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }
    async ffmpeg(argsFfmpeg: any) {
        try {
            return new Promise((resolve, reject) => {
                const opts = { shell: true }
                const child = spawn('ffmpeg', (argsFfmpeg), opts)
            

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 43 ~ SonyVegasByBootcamp ~ ffmpeg ~ error", error)
        }
    }

    //Creamos los datos
    async datos(nombre_pagina: string, limite: number){
        try {
            console.log('entre')
            let args = [
                '-H', 
                '"User-agent:',
                "'your bot 0.1'"+'"', 
                `https://www.reddit.com/r/${nombre_pagina}/top.json\?limit\=${limite}`,
                "| jq '.' |",
                'grep url_overridden_by_dest',
                '| grep -Eoh', 
                '"https://v.redd.it\\/\\w{13}"',
                '>',
                'videos.txt'
            ]
            await this.curl(args)      
        } catch (error) {
            throw error
        }
    }

    //Descargamos los videos del archivo de datos descargado
    async downloadvid(name_archivo: string){
        try {
            console.log('entre')
            let args = [
                '-a',
                `${name_archivo}.txt`
            ]
            console.log(args)
            await this.youtubedl(args)      
        } catch (error) {
            throw error
        }
    }
    async agregarfondos() {
        try {
            const args = [
                `${this.dirVideosdescargados};`,
                'let counter=0;',
                'for video in *.mp4;',
                'do ffmpeg -i',
                '"$video"',
                '-lavfi',
                "'[0:v]scale=ih*16/9:-1,boxblur=luma_radius=min(h\\,w)/20:luma_power=1:chroma_radius=min(cw\\,ch)/20:chroma_power=1[bg];[bg][0:v]overlay=(W-w)/2:(H-h)/2,crop=h=iw*9/16'",
                '-vb',
                '800k',
                `${this.dirVideosconfondo}/"video"_$((counter+1))_blur-${uuid4()}${this.extensionVideo}`,
                '&& counter=$(( counter+1 )); done',
            ]
            await this.cd(args)
        } catch (error) {
            throw error
        }
    }
    async agregarfondo(name_archivo: string) {
        try {
            const args = [
                `${this.dirVideosdescargados};`,
                'ffmpeg',
                '-i',
                `${name_archivo}.mp4`,
                '-lavfi',
                "'[0:v]scale=ih*16/9:-1,boxblur=luma_radius=min(h\\,w)/20:luma_power=1:chroma_radius=min(cw\\,ch)/20:chroma_power=1[bg];[bg][0:v]overlay=(W-w)/2:(H-h)/2,crop=h=iw*9/16'",
                '-vb',
                '800k',
                `${this.dirVideosconfondo}/${name_archivo}_blur-${uuid4()}${this.extensionVideo}`
            ]
            await this.cd(args)
        } catch (error) {
            throw error
        }
    }

    //cortamos los videos
    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables = 4) {
        try {
            let videoSource = {
                srcVideo: `${this.dirVideosdescargados}/${nameVideo}${this.extensionVideo}`,
                srcVideoOutput: `${this.dirVideoscortados}/${nameVideo}-${uuid4()}${this.extensionVideo}`
            }
            console.log(videoSource)
            // ffmpeg -y -i video_5.mp4 -threads 4 -ss 00:00:00 -to 00:00:20 -async 1 video_5_cut.mp4
            let args = [
                '-y',
                '-i',
                videoSource?.srcVideo,
                `-threads ${numberCpusAvailables}`,
                `-ss ${startTime}`,
                `-to ${endTime}`,
                '-async 1',
                videoSource?.srcVideoOutput
            ]

            await this.ffmpeg(args)
        } catch (error) {
            throw error
        }
    }
    async cutVideos(startTime: string, endTime: string, numberCpusAvailables = 4) {
        try {
            const args = [
                `${this.dirVideosdescargados};`,
                'let counter=0;',
                'for video in *.mp4;',
                'do ffmpeg -y -i',
                '"$video"',
                `-threads ${numberCpusAvailables}`,
                `-ss ${startTime}`,
                `-to ${endTime}`,
                '-async 1',
                `${this.dirVideoscortados}/"video"_$((counter+1))_cut-${uuid4()}${this.extensionVideo}`,
                '&& counter=$(( counter+1 )); done',
            ]
            await this.cd(args)
        } catch (error) {
            throw error
        }
    }

    async datosaunir() {
        try {
            let args = [
                `${this.dirVideosconfondo};`,
                'for f in *.mp4;',
                'do echo -i "file $f"',
                '>> file_list.txt;',
                'done;'
            ]

            await this.cd(args)
        } catch (error) {
            throw error
        }
    }
    async unirvideos(archivo_nombre: string) {
        try {
            const dirVideosconfondo = `${__dirname.split('/').slice(0,5).join('/')}`
            let args = [
                '-f',
                'concat',
                '-i',
                `${dirVideosconfondo}/srcvideosconfondo/${archivo_nombre}.txt`,
                `${this.dirVideosagrupados}/videosunidos${this.extensionVideo}`
            ]

            await this.ffmpeg(args)
        } catch (error) {
            throw error
        }
    }
    async uploadvideo(nombre_video: string, titulo: string, descripcion: string, palabrasclave: string, categoria: string, privacidad: string) {
        try {
            let args = [
                //${__dirname.split('/').slice(0,5).join('/')}/srcvideos
                `${__dirname.split('/').slice(0,4).join('/')}/apiyt/upload.py`,
                `--file="${__dirname.split('/').slice(0,4).join('/')}/srcvideosagrupados/${nombre_video}${this.extensionVideo}"`,
                `--title="${titulo}"`,
                `--description="${descripcion}"`,
                `--keywords="${palabrasclave}"`,
                `--category="${categoria}"`,
                `--privacyStatus="${privacidad}"`
            ]
            await this.python(args)
        } catch (error) {
            throw error
        }
    }
}

export default new SonyVegasByBootcamp()