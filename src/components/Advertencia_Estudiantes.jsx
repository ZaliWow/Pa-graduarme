import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Hacer_Examen } from './Hacer_examen';
import { useState } from 'react';
import { Barra_Estudiante } from './Barra_Estudiante';
import { LoadingUX } from "./LoadingUX"




export function Advertencia_Estudiantes({
    show,
    setMostrarAdvertencia,
    setVerRank,
    setVerExamen,
    verExamen,
    user,
    setRankEstudiantes
}) {
    const [loading, setLoading]=useState(false)
    const navigate = useNavigate()
    const handleClose = () => setMostrarAdvertencia(false);  
    

    const [multiples, setMultiples] = useState([
      {
        id_pregunta: "",
    text_pregunta: "",
    dificultad_pregunta: "",
    tipo: "",
    puntaje_pregunta: "",
    link_foto_pregunta: "",
    id_multiple: "",
    opcion_a: "",
    opcion_b: "",
    opcion_c: "",
    opcion_d: "",
    respuesta_correcta: ""
      },
    ])
    const [falsoVerdaderos, setFalsoVerdaderos]= useState([
      {
        id_pregunta: "",
        text_pregunta: "",
        dificultad_pregunta: "",
        tipo: "",
        puntaje_pregunta: "",
        link_foto_pregunta: "",
        id_pregunta_falso_verdadero: "",
        respuesta_correcta: ""
      },
    ])
    const [abiertas, setAbiertas]= useState([
      {
    id_pregunta: "",
    text_pregunta: "",
    dificultad_pregunta: "",
    tipo: "",
    puntaje_pregunta: "",
    link_foto_pregunta: "",
    id_abierta: "",
    respuesta_correcta: ""},
    ])
    const handleResetExamen = () => {
      setVerExamen(false)
      setAbiertas([
        {
      id_pregunta: "",
      text_pregunta: "",
      dificultad_pregunta: "",
      tipo: "",
      puntaje_pregunta: "",
      link_foto_pregunta: "",
      id_abierta: "",
      respuesta_correcta: ""},
      ])
      setFalsoVerdaderos([
        {
          id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_pregunta_falso_verdadero: "",
          respuesta_correcta: ""
        },
      ])
      setMultiples([
        {
          id_pregunta: "",
      text_pregunta: "",
      dificultad_pregunta: "",
      tipo: "",
      puntaje_pregunta: "",
      link_foto_pregunta: "",
      id_multiple: "",
      opcion_a: "",
      opcion_b: "",
      opcion_c: "",
      opcion_d: "",
      respuesta_correcta: ""
        },
      ])
      navigate("/home")
      setMostrarAdvertencia(true)
    }

    const handleCrearExamen = async(e) => {
    
      setMostrarAdvertencia(false)
      setLoading(true)
      e.preventDefault()
        try {
           
          const resOne = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/multiple/Dificil')
          for(let i=0; resOne.data.length > i; i++){
            setMultiples(( multiples => [... multiples, resOne.data[i]]))
          }
          const resTwo = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/fv/Dificil')
          for(let i=0; resTwo.data.length > i; i++){
            setFalsoVerdaderos((falsoVerdaderos=> [... falsoVerdaderos, resTwo.data[i]]))
          }
          const resThree = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/abierta/Dificil')
          for(let i=0; resThree.data.length > i; i++){
            setAbiertas((abiertas=> [... abiertas, resThree.data[i]] ))
          }
          
          navigate('/hacer/examen')
          setVerExamen(true)
          
          setVerRank(false)
          setLoading(false)
          
        } catch (error) {
          console.log("error")
        }
    }

    const handleCrearExamenFacil = async(e) => {
      setMostrarAdvertencia(false)
      setLoading(true)
      e.preventDefault()
      try {
         
        const resOne = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/multiple/Facil')
        for(let i=0; resOne.data.length > i; i++){
          setMultiples(( multiples => [... multiples, resOne.data[i]]))
        }
        const resTwo = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/fv/Facil')
        for(let i=0; resTwo.data.length > i; i++){
          setFalsoVerdaderos((falsoVerdaderos=> [... falsoVerdaderos, resTwo.data[i]]))
        }
        const resThree = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/abierta/Facil')
        for(let i=0; resThree.data.length > i; i++){
          setAbiertas((abiertas=> [... abiertas, resThree.data[i]] ))
        }
        
        navigate('/hacer/examen')
        setVerExamen(true)
        
        setVerRank(false)
        setLoading(false)
        
      } catch (error) {
        console.log("error")
      }
    }

    const handleCrearExamenMedia = async(e) => {
      setMostrarAdvertencia(false)
      setLoading(true)
      e.preventDefault()
      try {
         
        const resOne = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/multiple/Media')
        for(let i=0; resOne.data.length > i; i++){
          setMultiples(( multiples => [... multiples, resOne.data[i]]))
        }
        const resTwo = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/fv/Media')
        for(let i=0; resTwo.data.length > i; i++){
          setFalsoVerdaderos((falsoVerdaderos=> [... falsoVerdaderos, resTwo.data[i]]))
        }
        const resThree = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/preguntas/examen/abierta/Media')
        for(let i=0; resThree.data.length > i; i++){
          setAbiertas((abiertas=> [... abiertas, resThree.data[i]] ))
        }
        
        navigate('/hacer/examen')
        setVerExamen(true)
       
        setVerRank(false)
        setLoading(false)
        
      } catch (error) {
        console.log("error")
      }
    }


    return(
        <>
        <Modal 
        show = {show}
        onHide={handleClose}  
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      > 
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¡Prueba tu conocimiento!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>
            ¿Deseas tomar una prueba de conocimientos matematicos?
        </p>
    <h6>Elige una dificultad</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCrearExamenFacil} variant="dark">Facil</Button> 
          <Button onClick={handleCrearExamenMedia} variant="dark">Medio</Button>
          <Button onClick={handleCrearExamen} variant="dark">Dificil</Button>
       
        </Modal.Footer>
      </Modal>
    <Hacer_Examen   
    verExamen={verExamen} 
    abiertas={abiertas} 
    multiples={multiples} 
    falsoVerdaderos={falsoVerdaderos}
    setAbiertas={setAbiertas}
    setFalsoVerdaderos={setFalsoVerdaderos}
    setMultiples={setMultiples}
    setVerExamen={setVerExamen}
    user={user}
    setRankEstudiantes={setRankEstudiantes}
    handleResetExamen={handleResetExamen}

    
    />
    <LoadingUX show ={loading} setLoading={setLoading}></LoadingUX>
      </>
    )
}