import React, { useEffect, useRef, useState } from 'react'
import '../styles/WebCam.css'

export default function WebCam({ nropregunta, recupera, existe}){
  const [isRecording, setIsRecording] = useState(false);
  /* const [vervideo, setVerVideo] = useState(false); */
  const [vervideo, setVerVideo] = useState(true);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const streamRef = useRef<null | MediaStream>(null);
  const [downloadLink, setDownloadLink] = useState("");
  const streamRecorderRef = useRef<null | MediaRecorder>(null)
  const [audioSource, setAudioSource] = useState<string>('');
  const [videoSource, setVideoSource] = useState<string>('');
  const [audioSourceOptions, setAudioSourceOptions] = useState<Record<string, string>[]>([]);
  const [videoSourceOptions, setVideoSourceOptions] = useState<Record<string, string>[]>([]);
  const [error, setError] = useState<null | Error>(null);
  const [constrols, setControls] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  //const chunks = useRef<any[]>([]);
  const chunks= useRef<any[]>([]);

  function startRecording(){
    if(isRecording){
      return;
    }
    if(!streamRef.current){
      return;
    }
    streamRecorderRef.current = new MediaRecorder(streamRef.current);
    streamRecorderRef.current.start();
    streamRecorderRef.current.ondataavailable = function(event: BlobEvent){
      chunks.current.push(event.data);
    }
    console.log(nropregunta)
    setIsRecording(true);
  }
  function stopRecording(){
    if(!streamRecorderRef.current){
      return;
    }
    streamRecorderRef.current.stop();
    setIsRecording(false);
    setVerVideo(false);
    console.log('pause')
  }
  
  useEffect(function(){
    async function prepareStream(){
      function gotStream(stream: MediaStream){
        streamRef.current = stream;
        if(videoRef.current){
          videoRef.current.srcObject = stream;
        }
      }

      function getDevices(){
        return navigator.mediaDevices.enumerateDevices();
      }
      async function getStream(){
        if(streamRef.current){
          streamRef.current.getTracks().forEach(track =>{
            track.stop();
          })
        }
        const constrains = {
          audio: {deviceId: audioSource === '' ?  undefined : {exact: audioSource}},
          video: {deviceId: videoSource === '' ?  undefined : {exact: videoSource}}
        };
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constrains);
          gotStream(stream);
        } catch (error) {
          setError(error);
        }
      }
      function gotDevices(deviceInfos: MediaDeviceInfo[]){
        const audioSourceOptions: any = [];
        const videoSourceOptions: any = [];
        for (const deviceInfo of deviceInfos){
          if(deviceInfo.kind === 'audioinput'){
            audioSourceOptions.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label || `Michophone ${deviceInfo.deviceId}`
            });
          } else if (deviceInfo.kind === 'videoinput'){
            videoSourceOptions.push({
              value: deviceInfo.deviceId,
              label: deviceInfo.label || `Camera ${deviceInfo.deviceId}`
            })
          }
        }
        setAudioSourceOptions(audioSourceOptions);
        setVideoSourceOptions(videoSourceOptions);
      }
      await getStream();
      const mediaDevices = await getDevices();
      gotDevices(mediaDevices)
    }
    prepareStream();
  }, []);

  useEffect(function(){
    if (isRecording){
      return;
    }
    if (chunks.current.length === 0){
      return;
    }
    const blob = new Blob(chunks.current, {
      type: "video/x-matroska;codecs=avc1,opus",
    });
    setDownloadLink(URL.createObjectURL(blob));
    chunks.current = [];
  }, [isRecording , vervideo])
  return (
    <div>
      {/* <div>
        <select name="videoSource" id="videoSource" defaultValue={videoSource}>
          {videoSourceOptions.map(option=>(
            <option key={option.value} value={option.value}>{option.value}</option>
          ))}
        </select>
      </div>
      <div>
        <select name="audioSource" id="audioSource" defaultValue={audioSource}>
          {audioSourceOptions.map(option=>(
            <option key={option.value} value={option.value}>{option.value}</option>
          ))}
        </select>
      </div> */}
      <div>
        <video className="videoprincipal" ref={videoRef} autoPlay muted playsInline></video>
      </div>
      <div>
        <button onClick={() =>{
          startRecording();
          }} disabled={isRecording}>Grabar</button>
        <button onClick={() => {
          stopRecording();
          }} disabled={!isRecording}>Parar</button>
        <button onClick={()=>{
          setVerVideo(true);
          setMostrar(true);
        }} disabled={vervideo}>ver respuesta</button>
      </div>
      <div>
        {mostrar && <video className='videograbacion' src={downloadLink} controls={constrols}></video>}
      </div>
      <div>
        {mostrar  && (
          <button onClick={() => {recupera(downloadLink); 
            existe(false);
            setControls(true)}}> 
          reproducir respuesta antes de guardar</button>
        )}
      </div>
        {/*<a href={downloadLink} download={`pregunta_${nropregunta}.mp4`}></a>*/}
      {error && <p>{error.message}</p>}
    </div>
  );
}