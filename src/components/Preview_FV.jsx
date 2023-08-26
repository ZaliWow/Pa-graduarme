import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Preview_FV({
    show, 
    setMostrarPreview, 
    confirmarPOST, 
    inputPregunta, 
    inputFV,
    
}) {

const handleClose = () => setMostrarPreview(false);  
   
return (
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
        <h4>{inputFV.respuesta_correcta}</h4>
        <h6>la dificultad de su pregunta :</h6>
        <h4>{inputPregunta.dificultad_pregunta}</h4>
        <h6>el puntaje de su pregunta es</h6>
        <h4>{inputPregunta.puntaje_pregunta}</h4>  
        <h6>el tipo de pregunta es:</h6>
        <h4>{inputPregunta.tipo}</h4>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Cambiar Algo</Button> 
            <Button onClick ={confirmarPOST}>Guardar pregunta</Button> 
          </Modal.Footer>
        </Modal>
      );
    }