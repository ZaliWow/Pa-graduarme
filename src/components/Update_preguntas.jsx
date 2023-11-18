import  { useState, useRef } from 'react';
import "../estilos/bank.css"
import axios from 'axios';
import { No_loguin } from './No_loguin';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Editar_Pregunta } from './Editar_Pregunta';
import { CircularProgress } from '@mui/material';
import { TroubleshootSharp } from '@mui/icons-material';
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

export function Update_preguntas({setPreguntas, preguntas, verBank,logueado, preguntasMultiples, preguntasAbiertas}) {


const [support, setSupport]=useState(true)
const [preguntaBuscada, setPreguntaBuscada]=useState({})
const [preguntaEditar, setPreguntaEditar]=useState({})
const [validarMultiple, setValidarMultiple]=useState(false)
const [validarMultipledos, setValidarMultipledos]=useState(false)
const[validarAbierta, setValidarAbierta]=useState(false)
const[validarFV, setValidarFV]=useState(false)
const [viewEdit, setViewEdit]=useState(false)
const [idBuscar, setIdBuscar]=useState("0")
const [loading, setLoading]=useState(false)
const [mostrarBusqueda, setMostrarBusqueda]=useState(false)
const [prepararBusqueda, setPrepararBusqueda]=useState(false)
const idInputRef = useRef(null)
const handlePreguntas= () =>{
    setIdBuscar(idInputRef.current.value)
    console.log(preguntaBuscada)
    
}
const handleBuscarPregunta = async () =>{
    setValidarMultipledos(false)
    setValidarMultiple(false)
    const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/preguntas/${idBuscar}`) 
    if(res.data[0].dificultad_pregunta === preguntas[1].dificultad_pregunta){
    setMostrarBusqueda(true)
   
    }else{
        setMostrarBusqueda(false)
    }
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
        setValidarMultipledos(true)
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
    setPrepararBusqueda(true)
}


const listo =() =>{
    setPreguntaBuscada({})
    setSupport(true)
}

const handleEdit= async (IdPregunta)=>{
    setLoading(true)
    try {
        const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/preguntas/${IdPregunta}`) 

        if(res.data[0].tipo === "F/V"){
            setValidarFV(true)
            setValidarMultiple(false)
            setValidarAbierta(false)
            for(let i=0; preguntas.length > i; i++ ){
                if(preguntas[i].id_pregunta === IdPregunta){
                    setPreguntaEditar(
                        preguntas[i]
                    )
                    
                }
    
            }
        }
        else if( res.data[0].tipo === "MULTIPLE"){
            setValidarAbierta(false)
            setValidarFV(false)
            setValidarMultiple(true)
            for(let i=0; preguntasMultiples.length > i; i++ ){
                if(preguntasMultiples[i].id_pregunta === IdPregunta){
                    setPreguntaEditar(
                        preguntasMultiples[i]
                    )
                    
                }
    
            }
        }
        else if( res.data[0].tipo ==="ABIERTA"){
            setValidarAbierta(true)
            setValidarMultiple(false)
            setValidarFV(false)
            for(let i=0; preguntasAbiertas.length > i; i++ ){
                if(preguntasAbiertas[i].id_pregunta === IdPregunta){
                    setPreguntaEditar(
                        preguntasAbiertas[i]
                    )
                    
                }
     
            }
        }
    } catch (error) {
        
    }
  
  setViewEdit(true)
  setLoading(false)
}
if(logueado===false) return(<No_loguin></No_loguin>)
if(verBank===true ) return(
    <div>
        <Editar_Pregunta 
        validarFV={validarFV} validarAbierta={validarAbierta}
        validarMultiple={validarMultiple} setValidarMultiple={setValidarMultiple}setLoading={setLoading} viewEdit={viewEdit} setViewEdit={setViewEdit} preguntaEditar={preguntaEditar}></Editar_Pregunta>
    <div className='estilobuscar'>
        
    
      <Form.Control 
      type="text"
      ref={idInputRef} 
      onChange={handlePreguntas}
      placeholder="Buscar por iD" />
      <Button variant="dark" onClick={handleBuscarPregunta}>Buscar</Button>
        </div>
        <div>{prepararBusqueda ?
        <div>{mostrarBusqueda ?   
            <div>
                {support ? "" : 
                <div className="estiloExamen">
                <h6>información de examen</h6>
                    <p>id de la pregunta: {preguntaBuscada.id_pregunta}</p>
                    <p>pregunta: {preguntaBuscada.text_pregunta}</p>
                    <p>Respuesta correcta: {preguntaBuscada.respuesta_correcta}</p>
                    <img src={preguntaBuscada.link_foto_pregunta} alt="" />
                    <div>{validarMultipledos ?<>
                    <p>opcion a : {preguntaBuscada.opcion_a}</p>
                    <p>opcion b : {preguntaBuscada.opcion_b}</p>
                    <p>opcion c : {preguntaBuscada.opcion_c}</p>
                    <p>opcion d : {preguntaBuscada.opcion_d}</p>
                    </>: ""}</div>
                   <Button variant="dark" onClick={listo}></Button>
                </div> }
            </div>
            
            : <h3>La pregunta que intentas buscar no existe o pertenece a un banco de diferente dificultad</h3>}
            </div>
         : ""}</div>
        
        
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
                
                  
                  
        
                     <Button variant="light" onClick={() =>handleEdit(element.id_pregunta)}> {loading ? <CircularProgress color="inherit"></CircularProgress> : "Editar"}</Button>   
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
                
                  
                  
        
                     <Button variant="light" onClick={() =>handleEdit(element.id_pregunta)}> {loading ? <CircularProgress color="inherit"></CircularProgress> : "Editar"}</Button>   
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
                
                  
                  
        
                     <Button variant="light"onClick={() =>handleEdit(element.id_pregunta)}> {loading ? <CircularProgress color="inherit"></CircularProgress> : "Editar"}</Button>   
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