import { useState } from "react"
import { No_loguin } from "./No_loguin"
import axios from 'axios'
import "../estilos/examen.css"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Puntaje_ganado } from "./puntaje_Ganado";



export function Hacer_Examen({
    Logueado, 
    verExamen,
    abiertas,
    multiples,
    falsoVerdaderos,
    setAbiertas,
    setMultiples,
    setFalsoVerdaderos,
    setVerExamen,
    user,
    setRankEstudiantes,
    handleResetExamen
 
}){

// HOOOKS PARA LAS RESPUESTAS DE LOS ESTUDIANTES 
const primeraRespuestaRef = useRef()
const segundaRespuestaRef = useRef()
const terceraRespuestaRef = useRef()
const cuartaRespuestaRef = useRef()
const quintaRespuestaRef = useRef()
//HOOKS PARA LOS BODDYS DE LAS PREGUNTAS CON SUS RESPUESTAS ASIGNADAS POR ESTUDIANTES
const [bodyOne, setBodyOne] = useState("")
const [bodyTwo, setBodyTwo] = useState("")
const [bodyThree, setBodyThree] = useState("")
const [bodyFor, setBodyFor] = useState("")
const [bodyFive, setBodyFive] = useState("")
const [mostrarWin, setMostrarWin] = useState(false)
const [loading, setLoading] = useState(false)
const [loadingdos, setLoadingdos]=useState(false)
const navigate = useNavigate()





    const handleTerminarExamen = async(e) => {

      setLoading(true)
      setLoadingdos(false)
        
        try {
          const idExamen = crypto.randomUUID()
          const idRegistroOne = crypto.randomUUID()
          const idRegistroTwo= crypto.randomUUID()
          const idRegistroThree= crypto.randomUUID()
          const idRegistroFor= crypto.randomUUID()
          const idRegistroFive= crypto.randomUUID()
          const fechaActual = new Date();

          const puntajeActual = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes/${user.id_estudiante}`) 
          var NewPuntaje= parseInt(puntajeActual.data[0].puntaje)
          var puntajeganado = 0
          const result = await fetch('https://proyecto-backend-william-david-morales.onrender.com/datos/examen',{
            method:'POST',
            body: JSON.stringify({
              id_examen:idExamen,
              fecha_examen:fechaActual,
              id_estudiante:user.id_estudiante
            }),
            headers:{"Content-Type":"application/json"}
          })
          const resOne = await fetch('https://proyecto-backend-william-david-morales.onrender.com/examen/preguntas',{
            method:'POST',
            body: JSON.stringify({
            id_registro_examen:idRegistroOne,
            id_pregunta:abiertas[1].id_pregunta,
            id_examen:idExamen,
            respuesta_estudiante:bodyOne

            }),
            headers:{"Content-Type":"application/json"}
          })
          const resTwo = await fetch('https://proyecto-backend-william-david-morales.onrender.com/examen/preguntas',{
            method:'POST',
            body: JSON.stringify({
              id_registro_examen:idRegistroTwo,
              id_pregunta:multiples[1].id_pregunta,
              id_examen:idExamen,
              respuesta_estudiante:bodyTwo
            }),
            headers:{"Content-Type":"application/json"}
          })
          const resThree = await fetch('https://proyecto-backend-william-david-morales.onrender.com/examen/preguntas',{
            method:'POST',
            body: JSON.stringify({
              id_registro_examen:idRegistroThree,
              id_pregunta:multiples[2].id_pregunta,
              id_examen:idExamen,
              respuesta_estudiante:bodyThree
            }),
            headers:{"Content-Type":"application/json"}
          })
          const resFor = await fetch('https://proyecto-backend-william-david-morales.onrender.com/examen/preguntas',{
            method:'POST',
            body: JSON.stringify({
              id_registro_examen:idRegistroFor,
              id_pregunta:falsoVerdaderos[1].id_pregunta,
              id_examen:idExamen,
             
              respuesta_estudiante:bodyFor
            }),
            headers:{"Content-Type":"application/json"}
          })
          const resFive = await fetch('https://proyecto-backend-william-david-morales.onrender.com/examen/preguntas',{
            method:'POST',
            body: JSON.stringify({
              id_registro_examen:idRegistroFive,
              id_pregunta:falsoVerdaderos[2].id_pregunta,
              id_examen:idExamen,
              
              respuesta_estudiante:bodyFive
            }),
            headers:{"Content-Type":"application/json"}
          })
         
          if(abiertas[1].respuesta_correcta === bodyOne){
            NewPuntaje = NewPuntaje + parseInt(abiertas[1].puntaje_pregunta)
            puntajeganado=puntajeganado + parseInt(abiertas[1].puntaje_pregunta)
            
          }
          
          if(multiples[1].respuesta_correcta === bodyTwo){
            NewPuntaje = NewPuntaje + parseInt(multiples[1].puntaje_pregunta)
            puntajeganado=puntajeganado + parseInt(multiples[1].puntaje_pregunta)
          } else if(multiples[1].respuesta_correcta !== bodyTwo){
            NewPuntaje = NewPuntaje - parseInt(multiples[1].puntaje_pregunta)
            puntajeganado=puntajeganado - parseInt(multiples[1].puntaje_pregunta)
          }
          
          if(multiples[2].respuesta_correcta === bodyThree){
            NewPuntaje = NewPuntaje + parseInt(multiples[2].puntaje_pregunta)
            puntajeganado=puntajeganado +parseInt(multiples[2].puntaje_pregunta)
          }else if(multiples[2].respuesta_correcta !== bodyThree){
            NewPuntaje = NewPuntaje - parseInt(multiples[2].puntaje_pregunta)
            puntajeganado=puntajeganado -parseInt(multiples[2].puntaje_pregunta)
          }
         
          if(falsoVerdaderos[1].respuesta_correcta ===bodyFor){
            NewPuntaje = NewPuntaje + parseInt(falsoVerdaderos[1].puntaje_pregunta)
            puntajeganado=puntajeganado +parseInt(falsoVerdaderos[1].puntaje_pregunta)
          }else if(falsoVerdaderos[1].respuesta_correcta !==bodyFor){
            NewPuntaje = NewPuntaje - parseInt(falsoVerdaderos[1].puntaje_pregunta)
            puntajeganado=puntajeganado -parseInt(falsoVerdaderos[1].puntaje_pregunta)
          }
      
          if(falsoVerdaderos[2].respuesta_correcta ===bodyFive){
            NewPuntaje = NewPuntaje + parseInt(falsoVerdaderos[2].puntaje_pregunta)
            puntajeganado=puntajeganado + parseInt(falsoVerdaderos[2].puntaje_pregunta)
          }else if(falsoVerdaderos[2].respuesta_correcta !==bodyFive){
            NewPuntaje = NewPuntaje - parseInt(falsoVerdaderos[2].puntaje_pregunta)
            puntajeganado=puntajeganado - parseInt(falsoVerdaderos[2].puntaje_pregunta)
          }
         
             
          const resUpdate = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/registro/estudiante/puntaje/${user.id_estudiante}`,{
              method:'PUT',
              body: JSON.stringify({
                puntaje:NewPuntaje
              }),
              headers:{"Content-Type":"application/json"}
            })
          
          
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
           
           
         
          setMostrarWin(puntajeganado)
          setLoadingdos(true)
          
        } catch (error) {
          console.log(error)
        }




    }
    

const handleprueba = async(e) => {
  setBodyOne(primeraRespuestaRef.current.value)
  setBodyFor(cuartaRespuestaRef.current.value)
  setBodyFive(quintaRespuestaRef.current.value)

  

}

const handleRepOne = (e) => {
  setBodyTwo("A")
}
const handleRepTwo =(e) => {
  setBodyTwo("B")
}
const handleRepThree =(e) => {
  setBodyTwo("C")
}
const handleRepFor =(e) => {
  setBodyTwo("D")
}
const handleRepOne2 = (e) => {
  setBodyThree("A")
}
const handleRepTwo2 =(e) => {
  setBodyThree("B")
}
const handleRepThree2 =(e) => {
  setBodyThree("C")
}
const handleRepFor2 =(e) => {
  setBodyThree("D")
}
const proba = ()=> {
  console.log(NewPuntaje)
}

    if(Logueado===false)return(
        <No_loguin></No_loguin>
    )
    
    if(verExamen===true )return(
        <div >

<div>
  <Puntaje_ganado setVerExamen={setVerExamen} setMultiples={setMultiples} setAbiertas={setAbiertas} setFalsoVerdaderos={setFalsoVerdaderos} setMostrarWin={setMostrarWin} loadingdos={loadingdos} show ={loading} setLoading={setLoading} mostrarWin={mostrarWin} ></Puntaje_ganado>
</div>

          <div className="estilobotoncambioexamen">
          <Button variant="outline-danger" onClick={handleResetExamen}>Oops, Elegir otra dificultad</Button>
          </div>
 <div className="estiloFullbody">
        <div className="estiloExamen">
        <img src={abiertas[1].link_foto_pregunta} alt="" />
            <h6>{abiertas[1].text_pregunta}</h6>
     <Form.Control
      ref={primeraRespuestaRef}
      onChange={handleprueba}
       type="text"
       id="PreguntaMultiple"
       aria-label="Default select example"
     />
      
        
        <br />
        </div>

        <div className="estiloExamen">

          
        <img   src={multiples[1].link_foto_pregunta} alt="Error en la selección de fotos de apoyo (es posible que el docente haya elegido un archivo incompatible)" />
        <h6>{multiples[1].text_pregunta}</h6>
        <Form >
        <Form.Check
            onChange={handleRepOne}
            label={multiples[1].opcion_a}
            value={multiples[1].opcion_a}
            name="group1"
            type="radio"
            id={"A"}
          />
          <Form.Check
            onChange={handleRepTwo}
            label={multiples[1].opcion_b}
            value={multiples[1].opcion_b}
            name="group1"
            
            type="radio"
            id={"B"}
          />
          <Form.Check
         
            onChange={handleRepThree}
            label={multiples[1].opcion_c}
            value={multiples[1].opcion_c}
            name="group1"
            type="radio"
            id={"C"}
          />
          <Form.Check
          onChange={handleRepFor}
            
            label={multiples[1].opcion_d}
            value={multiples[1].opcion_d}
            name="group1"
            type="radio"
            id={"D"}
          />
          
</Form>

        </div>

        <div className="estiloExamen">
        <img   src={multiples[2].link_foto_pregunta}  />
           
        <h6>{multiples[2].text_pregunta}</h6>
        <Form>
<Form.Check
          
           onChange={handleRepOne2}
            label={multiples[2].opcion_a}
            value={multiples[2].opcion_a}
            name="group1"
            type="radio"
            id={`reverse-radio-1`}
          />
          <Form.Check
            
            onChange={handleRepTwo2}
            label={multiples[2].opcion_b}
            value={multiples[2].opcion_b}
            name="group1"
            type="radio"
            id={`reverse-radio-2`}
          />
          <Form.Check
            
            onChange={handleRepThree2}
            label={multiples[2].opcion_c}
            value={multiples[2].opcion_c}
            name="group1"
            type="radio"
            id={`reverse-radio-2`}
          />
          <Form.Check
           
            onChange={handleRepFor2}
            label={multiples[2].opcion_d}
            value={multiples[2].opcion_d}
            name="group1"
            type="radio"
            id={`reverse-radio-2`}
          />
          
</Form>
        </div>
     
        <div className="estiloExamen">
        <img   src={falsoVerdaderos[1].link_foto_pregunta} alt="" />
            <h6>{falsoVerdaderos[1].text_pregunta}</h6>
            <br />
            <Form.Select onChange={handleprueba} ref={cuartaRespuestaRef} aria-label="Default select example">
      <option>Selecciona una respuesta</option>
      <option value="Falso">Falso</option>
      <option value="Verdadero">Verdadero</option>
      
    </Form.Select>
        </div>
        <div className="estiloExamen">
        <img   src={falsoVerdaderos[2].link_foto_pregunta} alt="" />
            <h6>{falsoVerdaderos[2].text_pregunta}</h6>
            <br />
            <Form.Select onChange={handleprueba} ref={quintaRespuestaRef} aria-label="Default select example">
      <option>Selecciona una respuesta</option>
      <option value="Falso">Falso</option>
      <option value="Verdadero">Verdadero</option>
      
    </Form.Select>
        </div>

<div className="estiloExamen" >
    <Button variant="dark" onClick={handleTerminarExamen}> Terminar examen</Button>
   
    
    <br />
    
</div>

</div>

<br />
        <div className='footer'>
        <br />
       <p>&copy; 2023 Your Company. All rights reserved.</p>
    
       </div>
</div>
    )  
}