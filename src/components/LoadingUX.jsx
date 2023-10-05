import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LinearProgress } from '@mui/material';
import { CircularProgress } from '@mui/material';
import "../estilos/crear_pregunta.css"

export  function LoadingUX({show, setLoading}) {
    const handleClose = ()=>{
        setLoading(false)
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
    <Modal.Body>
        <div className='estiloUX'>
        <h3>Por favor espere...</h3>

<CircularProgress color="inherit"></CircularProgress>
        </div>

    </Modal.Body>
  </Modal>
)
}