import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../estilos/examen.css"

export function Preview_Multiple({
    show,
    setMostrarPreview,
    confirmarPOST,
    inputPregunta,
    inputMultiple
}) 
{
    const handleClose = () => setMostrarPreview(false);  
    return(
        <Modal 
          show = {show}
          onHide={handleClose}  
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='estilopreview'>
          <h4>Los datos a guardar de su pregunta son</h4> 
            <h6>Foto soporte de su pregunta</h6>
             
             <img
             height="200"
             width="400"
             src={inputPregunta.link_foto_pregunta} 
             alt="La pregunta no cuenta con imagen de apoyo." />
        <h6>el id de su pregunta es:</h6>
        <p>{inputPregunta.id_pregunta}</p>
        <h6>su pregunta es:</h6>
        <p>{inputPregunta.text_pregunta}</p>
        <h6>la respuesta a su pregunta es:</h6>
        <p>{inputMultiple.respuesta_correcta}</p>
        <h6>la dificultad de su pregunta :</h6>
        <p>{inputPregunta.dificultad_pregunta}</p>
        <h6>el puntaje de su pregunta es</h6>
        <p>{inputPregunta.puntaje_pregunta}</p>  
        <h6>el tipo de pregunta es:</h6>
        <p>{inputPregunta.tipo}</p>
        <h6>la opcion A es:</h6>
        <p>{inputMultiple.opcion_a}</p>
        <h6>la opcion B es:</h6>
        <p>{inputMultiple.opcion_b}</p>
        <h6>la opcion C es:</h6>
        <p>{inputMultiple.opcion_c}</p>
        <h6>la opcion D es:</h6>
        <p>{inputMultiple.opcion_d}</p>   
        </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant='dark'>Cambiar Algo</Button> 
            <Button onClick ={confirmarPOST}variant='dark'>Guardar pregunta</Button> 
          </Modal.Footer>
        </Modal>
    )
}