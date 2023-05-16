import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../estilos/estilologuin.css'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  axios  from 'axios';
export  function Loguin() {
  const  [correoEstudiante, setCorreoEstudiante]=useState('')
  const [contraEstudiante, setContraEstudiante]=useState('')
  const [error, setError]=useState('')
 const params = useParams()
 
// controlador de correos
const handlecorreo= (e)=>{
setCorreoEstudiante(e.target.value)  


}
// controlador de contraseñas
const handlecontra= (e)=>{
setContraEstudiante(e.target.value)

}
const handleSubmit = async(e)=>{
  e.preventDefault()
 try {
  const res = await axios.get('http://localhost:4000/registro/estudiantes',{
  correo_estudiante: correoEstudiante,
  contra_estudiante: contraEstudiante
  })  
  for(let i=0;res.data.length > i; i++){
    if(res.data[i].correo_estudiante === correoEstudiante && res.data[i].contra_estudiante === contraEstudiante)
    {
      console.log('por fin logueaste hijo de la re mil putas que te re mil pario')
    }else{
      console.log('Usuario o contraseña incorrecto')
    }
  }
  
 } catch (error) {
  console.log(error)
 }
}

useEffect(()=>{
  
})


  return (
    <Form 
    onSubmit={handleSubmit}
    className='estilologuin'>
    <Form.Group 
    className="mb-3" 
    controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
      name="correo_estudiante"
      onChange={handlecorreo}
      type="email" 
      placeholder="Enter email" />
      <Form.Text 
      className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group 
    className="mb-3" 
    controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      name="contra_estudiante"
      onChange={handlecontra}
      type="password" 
      placeholder="Password" />
    </Form.Group>
    <Form.Group 
    className="mb-3" 
    controlId="formBasicCheckbox">
    </Form.Group>
    <Button 
    variant="dark" 
    type='submit'
    >
      Log in!
    </Button>
  </Form>
  )
}
