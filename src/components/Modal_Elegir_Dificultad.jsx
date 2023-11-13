import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../estilos/crear_pregunta.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Update_preguntas } from './Update_preguntas';


export function Modal_Elegir_Dificultad({
    mostrarModal, 
    setMostrarModal,
    verBank,
    setVerBank,
    preguntas,
    setPreguntas,
    preguntasMultiples,
    setPreguntasMultiples,
    setPreguntasAbiertas,
    preguntasAbiertas
}){

    const navigate = useNavigate()
   
   
    
    

    const handleFacil= async () =>{
        try {
            const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/update/falso/verdadero/Facil`)
            for(let i=0; res.data.length > i; i++ ){
            setPreguntas(preguntas =>[...preguntas, res.data[i]])}
            const res2 = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/update/multiples/Facil') 
            for(let i=0; res2.data.length > i; i++ ){
            setPreguntasMultiples(preguntasMultiples =>[...preguntasMultiples, res2.data[i]])}
            const res3 = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/update/abiertas/Facil') 
            for(let i=0; res3.data.length > i; i++ ){
            setPreguntasAbiertas(preguntasAbiertas =>[...preguntasAbiertas, res3.data[i]])}
           
           
           
           
           
            navigate("/revisar/preguntas")
            setVerBank(true)
            handleClose()
        } catch (error) {
            console.log(error)
        }
        console.log(preguntas)
        }
       
        
    

    const handleMedia= async () =>{
        try {
            const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/update/falso/verdadero/Media`)
            for(let i=0; res.data.length > i; i++ ){
            setPreguntas(preguntas =>[...preguntas, res.data[i]])}
            const res2 = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/update/multiples/Media') 
            for(let i=0; res2.data.length > i; i++ ){
            setPreguntasMultiples(preguntasMultiples =>[...preguntasMultiples, res2.data[i]])}
            navigate("/revisar/preguntas")
            setVerBank(true)
            handleClose()
        } catch (error) {
            console.log(error)
        }
        console.log(preguntas)
        }
        
    

    const handleDificil= async () =>{
        try {
            const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/update/falso/verdadero/Dificil`)
            for(let i=0; res.data.length > i; i++ ){
            setPreguntas(preguntas =>[...preguntas, res.data[i]])}
            const res2 = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/update/multiples/Dificil') 
            for(let i=0; res2.data.length > i; i++ ){
            setPreguntasMultiples(preguntasMultiples =>[...preguntasMultiples, res2.data[i]])}
            navigate("/revisar/preguntas")     
            setVerBank(true)
            handleClose()
        } catch (error) {
            console.log(error)
        }
        console.log(preguntas)
        }
    
    const handleClose = ()=>{
        setMostrarModal(false)
    }
    return(
        <>
        <Modal 
    show = {mostrarModal}
    onHide={handleClose}  
    backdrop="static"
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >  
    <Modal.Body>
    <p>
            ¿Deseas consultar/editar el banco de preguntas?
        </p>
    <h6>Elige una dificultad</h6>

    </Modal.Body>
    <Modal.Footer>
          <Button onClick={handleFacil} variant="dark">Facil</Button> 
          <Button onClick={handleMedia} variant="dark">Medio</Button>
          <Button onClick={handleDificil} variant="dark">Dificil</Button>
        <p>Recuerda que el banco de preguntas esta dividido en 3 sub bancos, separados por su nivel de dificultad</p>
        </Modal.Footer>
  </Modal>

  <Update_preguntas  
  setPreguntas={setPreguntas}
  preguntasAbiertas={preguntasAbiertas} preguntas={preguntas} verBank={verBank} preguntasMultiples={preguntasMultiples}></Update_preguntas>
  </>
    )
}