import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Recomendaciones } from './Recomendaciones';
import '../estilos/estilorecomendacion.css'
export function Crear_Pregunta() {
  return (
    
    <>
    <div className='estilorecomendacion'>
    <Recomendaciones></Recomendaciones>
    </div>
    
    <br />
    <div className="d-flex justify-content-around">
    
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pregunta Falso Verdadero</Card.Title>
        <Card.Text>
        ¡Crea tu pregunta!
        </Card.Text>
        <Button 
        variant="dark"
       
        >Lets go!</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Multiple Respuesta</Card.Title>
        <Card.Text>
        ¡Crea tu pregunta!
        </Card.Text>
        <Button 
        variant="dark"
        
        >Lets go!</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pregunta Respuesta Abierta</Card.Title>
        <Card.Text>
        ¡Crea tu pregunta!
        </Card.Text>
        <Button 
        variant="dark"
        
        >Lets go!</Button>
      </Card.Body>
    </Card>


    </div>
    </>
  )
}
