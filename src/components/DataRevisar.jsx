import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../estilos/examen.css"

export function DataRevisar({
    show, setMostrarAdvertencia, infoRevisar, setInfoRevisar

}){
    const handleClose = () =>{
        setMostrarAdvertencia(false);
        setInfoRevisar([{
            id_registro_examen: "",
            id_pregunta: "",
            id_examen: "",
            respuesta_estudiante: "",
            fecha_examen: "",
            id_estudiante: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: ""
        }])
    } 
    if(infoRevisar.length > 0 )
    return(
        
        <Modal 
        show = {show}
        onHide={handleClose}  
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      > 
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Retroalimentacion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div>
   
    <p>------------------------------------------------------------</p>
    <div >
        {infoRevisar.slice(1).map((element, index )=>(
                
        <div className='estiloRevisar'
         controls
         key={index }>       
            <h6
                controls
                key={index}>  
                Pregunta Numero : {index + 1}
            </h6>
              <h6>Pregunta :</h6>
            <p>{element.text_pregunta}</p>
            <h6>Respuesta del estudiante :</h6>
            <p>{element.respuesta_estudiante}</p>
            <p>------------------------------------------------------------</p>
        </div>                       
     ))}
    </div>
</div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant='dark' onClick={handleClose}> Terminar Retroalimentacion </Button>
       
        </Modal.Footer>
      </Modal>
      )
    
}