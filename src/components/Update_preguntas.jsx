import  { useState, useRef } from 'react';
import "../estilos/bank.css"
import axios from 'axios';
import { No_loguin } from './No_loguin';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { TrainRounded } from '@mui/icons-material';


export function Update_preguntas({setPreguntas, preguntas, verBank,logueado, preguntasMultiples, preguntasAbiertas}) {


const [support, setSupport]=useState(true)
const [preguntaBuscada, setPreguntaBuscada]=useState({
})
const [idBuscar, setIdBuscar]=useState("0")
const idInputRef = useRef(null)
const handlePreguntas= () =>{
    setIdBuscar(idInputRef.current.value)
    console.log(preguntaBuscada)
    
}
const handleBuscarPregunta = async () =>{
    const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/preguntas/${idBuscar}`) 
    
    console.log(res.data[0])
    if(res.data[0].tipo === "F/V"){
        for(let i=0; preguntas.length > i; i++ ){
            if(preguntas[i].id_pregunta === idBuscar){
                setPreguntaBuscada(
                    preguntas[i]
                )
                
            }

        }
    }
    else if( res.data[0].tipo === "MULTIPLE"){
        for(let i=0; preguntasMultiples.length > i; i++ ){
            if(preguntasMultiples[i].id_pregunta === idBuscar){
                setPreguntaBuscada(
                    preguntasMultiples[i]
                )
                
            }

        }
    }
    else if( res.data[0].tipo ==="ABIERTA"){
        for(let i=0; preguntasAbiertas.length > i; i++ ){
            if(preguntasAbiertas[i].id_pregunta === idBuscar){
                setPreguntaBuscada(
                    preguntasAbiertas[i]
                )
                
            }

        }
    }
    setSupport(false)
}


const listo =() =>{
    setSupport(true)
}

if(logueado===false) return(<No_loguin></No_loguin>)
if(verBank===true ) return(
    <div>
        
    <div className='estilobuscar'>
        
    
      <Form.Control 
      type="text"
      ref={idInputRef} 
      onChange={handlePreguntas}
      placeholder="Buscar por iD" />
      <Button variant="dark" onClick={handleBuscarPregunta}>Buscar</Button>
        </div>
        <div>
            {support ? "" : 
            <div className="estiloExamen">
            <h6>información de examen</h6>
                <p>id de la pregunta: {preguntaBuscada.id_pregunta}</p>
                <p>pregunta: {preguntaBuscada.text_pregunta}</p>
                <p>Respuesta correcta:{preguntaBuscada.respuesta_correcta}</p>
                <img src={preguntaBuscada.link_foto_pregunta} alt="" />
               <Button variant="dark" onClick={listo}></Button>
            </div> }
        </div>
<div className="containerbank">
    <div className='estiloFullbody'>
    <div className='container2'>
      <div  className='pregunta'>
        <div className='estilobank'>
            <h6>Banco de preguntas de dificultad {preguntas[1].dificultad_pregunta}en modalidad Preguntas de despuesta falso y verdadero</h6>
        </div>

        <div>
        {preguntas.slice(1).map((element, index )=>(
                
                <div
                className="estiloExamen"
                controls
                id={element.id_pregunta} 
                key={index}>
                  
                    <h6
                 controls
                 key={index}
                 
                  >
               
                  </h6>
                  <h6>información de examen</h6>
                <p>id de la pregunta: {element.id_pregunta}</p>
                <p>pregunta: {element.text_pregunta}</p>
                <p>Respuesta correcta:{element.respuesta_correcta}</p>
                <img src={element.link_foto_pregunta} alt="" />
                
                  
                  
        
                     <Button variant="light"> Editar</Button>   
              </div>            
                  ))}
        </div>


      </div>
      <div className='pregunta'>
      <div className='estilobank'>
            <h6>Banco de preguntas de dificultad {preguntas[1].dificultad_pregunta}en modalidad Preguntas de opción múltiple</h6>
        </div>


        <div>
        {preguntasMultiples.slice(1).map((element, index )=>(
                
                <div
                className="estiloExamen"
                controls
                key={index }>
                    
                    <h6
                 controls
                 key={index}
                  >
               
                  </h6>
                  <h6>información de examen</h6>
                  <p>id de la pregunta: {element.id_pregunta}</p>
                <p>pregunta: {element.text_pregunta}</p>
                <p>Respuesta correcta Opcion:{element.respuesta_correcta}</p>
                <p>Opcion A:{element.opcion_a}</p>
                <p>Opcion B:{element.opcion_b}</p>
                <p>Opcion C:{element.opcion_c}</p>
                <p>Opcion D:{element.opcion_d}</p>
                <img src={element.link_foto_pregunta} alt="" />
                
                  
                  
        
                     <Button variant="light" onClick={handlePreguntas}> Editar</Button>   
              </div>            
                  ))}
        </div>

      </div>
      <div className='pregunta'>
      <div className='estilobank'>
            <h6>Banco de preguntas de dificultad {preguntas[1].dificultad_pregunta} en modalidad Preguntas de respuesta abierta</h6>
        </div>
        <div>
        {preguntasAbiertas.slice(1).map((element, index )=>(
                
                <div
                className="estiloExamen"
                controls
                key={index }>
                    
                    <h6
                 controls
                 key={index}
                  >
               
                  </h6>
                  <h6>información de examen</h6>
                <p>id de la pregunta: {element.id_pregunta}</p>
                <p>pregunta: {element.text_pregunta}</p>
                <p>Respuesta correcta:{element.respuesta_correcta}</p>
                <img src={element.link_foto_pregunta} alt="" />
                
                  
                  
        
                     <Button variant="light"> Editar</Button>   
              </div>            
                  ))}
        </div>
      </div>

      </div>
</div>
        
        </div>
       </div>
       
    )
}