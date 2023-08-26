import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            <h6>Foto soporte de su pregunta</h6>
            <h4>Los datos a guardar de su pregunta son</h4>  
             <img
             height="200"
             width="400"
             src={inputPregunta.link_foto_pregunta} 
             alt="Second slide" />
        <h6>el id de su pregunta es:</h6>
        <h4>{inputPregunta.id_pregunta}</h4>
        <h6>su pregunta es:</h6>
        <h4>{inputPregunta.text_pregunta}</h4>
        <h6>la respuesta a su pregunta es:</h6>
        <h4>{inputMultiple.respuesta_correcta}</h4>
        <h6>la dificultad de su pregunta :</h6>
        <h4>{inputPregunta.dificultad_pregunta}</h4>
        <h6>el puntaje de su pregunta es</h6>
        <h4>{inputPregunta.puntaje_pregunta}</h4>  
        <h6>el tipo de pregunta es:</h6>
        <h4>{inputPregunta.tipo}</h4>
        <h6>la opcion A es:</h6>
        <h4>{inputMultiple.opcion_a}</h4>
        <h6>la opcion B es:</h6>
        <h4>{inputMultiple.opcion_b}</h4>
        <h6>la opcion C es:</h6>
        <h4>{inputMultiple.opcion_c}</h4>
        <h6>la opcion D es:</h6>
        <h4>{inputMultiple.opcion_d}</h4>   
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Cambiar Algo</Button> 
            <Button onClick ={confirmarPOST}>Guardar pregunta</Button> 
          </Modal.Footer>
        </Modal>
    )
}