import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Hacer_Examen } from './Hacer_examen';
import { useState } from 'react';
import { Barra_Estudiante } from './Barra_Estudiante';




export function Advertencia_Estudiantes({
    show,
    setMostrarAdvertencia,
    setVerRank,
    setVerExamen,
    verExamen,
    user,
    setRankEstudiantes
}) {

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


    const handleCrearExamen = async(e) => {
      e.preventDefault()
        try {
           
          const resOne = await axios.get('http://localhost:4000/preguntas/examen/multiple/Dificil')
          for(let i=0; resOne.data.length > i; i++){
            setMultiples(( multiples => [... multiples, resOne.data[i]]))
          }
          const resTwo = await axios.get('http://localhost:4000/preguntas/examen/fv/Dificil')
          for(let i=0; resTwo.data.length > i; i++){
            setFalsoVerdaderos((falsoVerdaderos=> [... falsoVerdaderos, resTwo.data[i]]))
          }
          const resThree = await axios.get('http://localhost:4000/preguntas/examen/abierta/Dificil')
          for(let i=0; resThree.data.length > i; i++){
            setAbiertas((abiertas=> [... abiertas, resThree.data[i]] ))
          }
          
          navigate('/hacer/examen')
          setVerExamen(true)
          setMostrarAdvertencia(false)
          setVerRank(false)
          
          
        } catch (error) {
          console.log("error")
        }
    }

    const handleCrearExamenFacil = async(e) => {
      e.preventDefault()
      try {
         
        const resOne = await axios.get('http://localhost:4000/preguntas/examen/multiple/Facil')
        for(let i=0; resOne.data.length > i; i++){
          setMultiples(( multiples => [... multiples, resOne.data[i]]))
        }
        const resTwo = await axios.get('http://localhost:4000/preguntas/examen/fv/Facil')
        for(let i=0; resTwo.data.length > i; i++){
          setFalsoVerdaderos((falsoVerdaderos=> [... falsoVerdaderos, resTwo.data[i]]))
        }
        const resThree = await axios.get('http://localhost:4000/preguntas/examen/abierta/Facil')
        for(let i=0; resThree.data.length > i; i++){
          setAbiertas((abiertas=> [... abiertas, resThree.data[i]] ))
        }
        
        navigate('/hacer/examen')
        setVerExamen(true)
        setMostrarAdvertencia(false)
        setVerRank(false)
        
        
      } catch (error) {
        console.log("error")
      }
    }

    const handleCrearExamenMedia = async(e) => {
      e.preventDefault()
      try {
         
        const resOne = await axios.get('http://localhost:4000/preguntas/examen/multiple/Media')
        for(let i=0; resOne.data.length > i; i++){
          setMultiples(( multiples => [... multiples, resOne.data[i]]))
        }
        const resTwo = await axios.get('http://localhost:4000/preguntas/examen/fv/Media')
        for(let i=0; resTwo.data.length > i; i++){
          setFalsoVerdaderos((falsoVerdaderos=> [... falsoVerdaderos, resTwo.data[i]]))
        }
        const resThree = await axios.get('http://localhost:4000/preguntas/examen/abierta/Media')
        for(let i=0; resThree.data.length > i; i++){
          setAbiertas((abiertas=> [... abiertas, resThree.data[i]] ))
        }
        
        navigate('/hacer/examen')
        setVerExamen(true)
        setMostrarAdvertencia(false)
        setVerRank(false)
        
        
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

    
    />
      </>
    )
}