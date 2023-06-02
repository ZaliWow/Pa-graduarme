import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../estilos/estilologuin.css'
import { Errores } from '../components/errores';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  axios  from 'axios';
import { Container } from 'react-bootstrap';
export  function Loguin({
  setLogueado,
  setUsuario,
  user
}) {
  


  const  [correoEstudiante, setCorreoEstudiante]=useState('')
  const [contraEstudiante, setContraEstudiante]=useState('')
  const[pruebaUsuario, setPruebaUsuario]=useState("")
  
  const [error, setError]=useState(false)
//Hook de navegacion  
const navigate =useNavigate()
 
// controlador de correos
const handlecorreo= (e)=>{
setCorreoEstudiante(e.target.value)  


}
// controlador de contraseñas
const handlecontra= (e)=>{
setContraEstudiante(e.target.value)

}
const handleInfo = (e)=>{
  e.preventDefault()
  navigate('/')
}
const loguearse =(e)=>{
  e.preventDefault()
  navigate('/home')
  setLogueado(true)
}
const handleSubmit = async(e)=>{
  e.preventDefault()
  
 try {
  const res = await axios.get('http://localhost:4000/registro/estudiantes')  
  for(let i=0;res.data.length > i; i++){
    if(res.data[i].correo_estudiante === correoEstudiante && res.data[i].contra_estudiante === contraEstudiante)
    {
      setLogueado(true)
      navigate('/home')
      setUsuario({...user, 
        id_estudiante: res.data[i].id_estudiante,
        puntaje_estudiante:res.data[i].puntaje_estudiante,
        correo_estudiante:res.data[i].correo_estudiante,
        nombre_estudiante:res.data[i].nombre_estudiante,
        apellido_estudiante:res.data[i].apellido_estudiante,
      
      
      })
      
    }else{
      setError(true)
    }
  }
  
 } catch (error) {
  console.log(error)
 }
}
  return (
    <div >
      
      <Errores errors={error} setError={setError}/>
      <div className='estilologuin'>
    <Form 
    onSubmit={handleSubmit}
    >
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
        Ingresa los datos proporcionados por la institucion
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

    <Button variant="outline-dark" onClick={loguearse}>
      Back
    </Button>
  </Form>
  </div>
  </div>
  )
  
}
