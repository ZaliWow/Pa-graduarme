import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import '../estilos/estiloregistro.css'
import { useState, useEffect } from "react"
import { No_loguin } from "./No_loguin"
import { useNavigate } from "react-router-dom"
export  function Registro_Estudiantes({Logueado}) {
  if(Logueado===false)return (
    <No_loguin />
  )

  //PARA LAS REDIRECCIONES
  const navigate = useNavigate();

  // PARA GUARDAR LAS VARIABLES DE ESTADO DEL IMPUT
  const [inputEstudiante, setInputestudiante]= useState({
    id_estudiante: "",
    nombre_estudiante: "",
    apellido_estudiante: "",
    correo_estudiante: "",
    contra_estudiante:""

  })

  // PARA CONTROLAR EL SUBMIT DEL FORMULARIO
  const handleSubmit = async (e)=>{
  e.preventDefault()
   const res = await fetch('http://localhost:4000/registro/estudiantes',{
      method:'POST',
      body: JSON.stringify(inputEstudiante),
      headers:{"Content-Type":"application/json"}
    })
 navigate('/home')
  }

  // PARA LOS CAMBIOS DENTRO DE LOS IMPUTS
  const handleChange=(e)=>
    setInputestudiante({...inputEstudiante,[e.target.name]: e.target.value})
  


  return (
    <div className="estiloregistro">

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
        <Form.Label>Identificación</Form.Label>
        <Form.Control 
        name="id_estudiante"
        type="text" 
        placeholder="Ingresa la identificacion del estudiante" 
        onChange={handleChange}
        />
   
      </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
        name="nombre_estudiante"
        type="text" 
        placeholder="Ingresa el nombre del estudiante"
        onChange={handleChange}
        />
     
      </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Apellido</Form.Label>
        <Form.Control 
        name="apellido_estudiante"
        type="text" 
        placeholder="Ingresa el apellido del estudiante" 
        onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control 
        name="correo_estudiante"
        type="email" 
        placeholder="Ingresa correo del estudiante"
        onChange={handleChange}
        />
        <Form.Text className="text-muted">
          Los correos electronicos son unicos para cada estudiante.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        name="contra_estudiante"
        type="password" 
        placeholder="Asigna una contraseña al estudiante" 
        onChange={handleChange}
        />
      </Form.Group>
      <Button 
      variant="dark"
      type="submit" >
        Registrar
      </Button>
        </Form>
    </div>
  )
}
