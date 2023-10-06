import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
export  function Errorcambiocurso({show, setMostrarAdvertencia}) {
    const handleClose = () => setMostrarAdvertencia(false);  
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
        Algo ha salido Mal
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Algo salió mal por favor verifica tus datos e intentalo denuevo.
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleClose} variant="dark">Entendido</Button> 
     
    </Modal.Footer>
  </Modal>
)
}