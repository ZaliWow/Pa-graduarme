import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Recomendaciones } from './Recomendaciones';
import '../estilos/estilorecomendacion.css'
import { No_loguin } from "./No_loguin"
export function Crear_Pregunta({Logueado}) {
  if(Logueado===false)return (
    <No_loguin />
  )
  return (
    
    <>
    <div className='estilorecomendacion'>
    <Recomendaciones></Recomendaciones>
    </div>
    
    <br />
    <div className="d-flex justify-content-around" >
    
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/124ba0b2-fb78-4838-b528-9040d89885da/DreamShaper_v5_yesno_question_image_2.jpg" />
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
      <Card.Img variant="top" src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/483dc74e-2ddb-4b77-8ac4-5d95e3e871af/DreamShaper_v5_create_an_image_that_represents_multiple_choice_0.jpg" />
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
      <Card.Img variant="top" src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/f225a7ac-0b07-47e3-abc9-a3cf8eb14985/DreamShaper_v5_create_an_image_that_represents_openended_quest_2.jpg" />
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
