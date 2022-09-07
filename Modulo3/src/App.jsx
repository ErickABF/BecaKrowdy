import { useState, useEffect, useRef } from "react";
import React from 'react'
import Pregunta from './components/Pregunta.jsx'
import preguntas from './data/preguntas.js'
import './styles/App.css'
import FullScreenDialog from './components/Dialog.jsx';


function App() {

  const [link, setLink] = useState('');
  const [cambiodepregunta, setCambioDePregunta] = useState(0);
  const links = useRef([]);
  function cambio(numero){
    setCambioDePregunta(numero)
  }
  function recuperarlink(link,nropregunta){
    setLink(link)
    links[nropregunta]=link;
  }
  useEffect(function(){
  },[link, cambiodepregunta]);

  return(
    <div>
    <div className="app">
      <h1>Preguntas de Seleccion Krowdy</h1>
        <div className='grupo-preguntas'>
          {preguntas.map((respuesta) => (
          <div key={respuesta.id} className='pregunta-llamado'>
          <Pregunta 
          pregunta = {respuesta.pregunta}
          nropregunta = {respuesta.id}
          link = {links[respuesta.id]}
          />
          <FullScreenDialog
          pregunta = {respuesta.pregunta}
          nropregunta = {respuesta.id}
          recupera = {recuperarlink}
          cambio = {cambio}
          />
          </div>
          ))}
        </div> 
      </div>
    </div>
  )
}
export default App
