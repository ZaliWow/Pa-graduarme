import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LinearProgress } from '@mui/material';
import { CircularProgress } from '@mui/material';
import "../estilos/crear_pregunta.css"
import { useNavigate } from 'react-router-dom';

export  function Puntaje_ganado({setVerExamen, setAbiertas, setMultiples, setFalsoVerdaderos,show, setLoading, mostrarWin, loadingdos}) {
  const navigate = useNavigate();
  const handleClose = ()=>{
        setLoading(false)
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
      setVerExamen(false)
    
      navigate('/home')
    }
    
return(
  <Modal 
  show = {show}
  onHide={handleClose}  
  backdrop="static"
  size="sm"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>  
<Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Cargando puntaje...
          </Modal.Title>
        </Modal.Header>
  <Modal.Body>
      <div className='estiloUX'>
        <h6>¡Puntaje Final!</h6>
      <h3>{loadingdos ? mostrarWin : <CircularProgress color="inherit"></CircularProgress>}</h3>


      </div>

  </Modal.Body>
</Modal>
)
}