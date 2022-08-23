import SonyVegasController from './sonyvegas.controller'

export const VideoStatusProcess = {
    INIT: 'inicio',
    END: 'fin',
    ERR: 'error'
}

class VideoController {
    async testingFfmpeg() {
        try {
            await SonyVegasController.ffmpeg({})
        } catch (error) {
            throw error
        }
    }
    async executeProcessToBuildReel() {
        const videoId: any = null

        try {
            // al iniciar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.INIT
            })
            // al finalizar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.END
            })
        } catch (error) {
            // al obtener error en el proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.ERR
            })
            throw error
        }
    }
    async getStatusOfProcess({ }: any) {
        try {

        } catch (error) {
            throw error
        }
    }

    private async setStatusOfVideo({ }: any) {

    }

    private async createVideoReel() {

    }

    /* async updateData() {
        let dateUpdate=  new Date()
        const updateData = await VideoReelModel.findOneAndUpdate({
            _id: "62f302a0f9027c96dda81aa6"
        }, {
            $set: {
                srcLink: 'https://google.com',
                updatedAt: dateUpdate
            }
        })
    } */

    /* async createData() {
        let dateUpdate=  new Date()
        const updateData = await VideoReelModel.insertMany([{
            srcLink: 'https://google.com',
            createdAt: new Date()
        }])
    } */

    //Cortar los videos
    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables: number) {
        try { 
            await SonyVegasController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
        } catch (error) {
            throw error
        }
    }
    async cutVideos(startTime: string, endTime: string, numberCpusAvailables: number) {
        try { 
            await SonyVegasController.cutVideos(startTime, endTime, numberCpusAvailables)
        } catch (error) {
            throw error
        }
    }
    //Creamos los datos de acuerdo a la cantidad de videos max 25
    async datos(nombre_pagina: string, limite: number) {
        try {
            await SonyVegasController.datos(nombre_pagina, limite)
        } catch (error) {
            throw error
        }
    }

    //Descarga los videos
    async downloadvid(name_archivo: string){
        try {        
            const ruta = '/mnt/e/Krowdy/reto_completo/srcvideosdescargados'
            let args2 = [
                'let counter=0;',
                'for video in *.mp4;',
                'do mv -i',
                '"$video"',
                `${ruta}/"video"_$((counter+1)).mp4`,
                '&& counter=$(( counter+1 )); done',
            ]
            await SonyVegasController.downloadvid(name_archivo)
            await SonyVegasController.libre(args2)
        } catch (error) {
            throw error
        }
    }
    async agregarfondo(name_archivo: string){
        try {     
            await SonyVegasController.agregarfondo(name_archivo)
        } catch (error) {
            throw error
        }
    }
    async agregarfondos(){
        try {     
            await SonyVegasController.agregarfondos()
        } catch (error) {
            throw error
        }
    }
    async datosaunir(){
        try {     
            await SonyVegasController.datosaunir()
        } catch (error) {
            throw error
        }
    }
    async unirvideos(archivo_nombre: string){
        try {     
            await SonyVegasController.unirvideos(archivo_nombre)
        } catch (error) {
            throw error
        }
    }
    async uploadvideo(nombre_video: string, titulo: string, descripcion: string, palabrasclave: string, categoria: string, privacidad: string){
        try {     
            await SonyVegasController.uploadvideo(nombre_video, titulo, descripcion, palabrasclave, categoria, privacidad)
        } catch (error) {
            throw error
        }
    }
}

export default new VideoController()