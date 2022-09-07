import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../styles/Pregunta.css'

function Pregunta({ pregunta , nropregunta, link, valor}){
  const [milink, setMiLink] = useState('')

  useEffect(function(){
  },[milink])
  return (
    <div className='pregunta'>
      <div className='nombre-pregunta'>
        <p>Pregunta {nropregunta} : {pregunta}</p>
      </div>
      {link ? (<button onClick={() => {setMiLink(link)}}>ver respuesta</button>): (<button onClick={() => {setMiLink(link)}} disabled={true}>ver respuesta</button>)}
      
      <div className='video'>
        <video width="200" height="300" controls>
          {milink === '' ? (<p></p>) : (<source src={milink} type="video/mp4"/>)}
        </video>
      </div>
    </div>
  )
}

export default Pregunta