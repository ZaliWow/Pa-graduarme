import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import '../estilos/estiloregistro.css'
import { useState, useRef } from "react"
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
  const [cursoEstudiante, setCursoEstudiante]= useState(
    {
      id_estudiante:"",
    id_curso:""}
  )
const idEstudiante = useRef(null)
const idCurso = useRef(null)
  // PARA CONTROLAR EL SUBMIT DEL FORMULARIO
  const handleSubmit = async (e)=>{
  e.preventDefault()
  try {
    const res = await fetch('https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes',{
      method:'POST',
      body: JSON.stringify(inputEstudiante),
      headers:{"Content-Type":"application/json"}
    })
    const res2 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/cursos/estudiantes',{
      method:'POST',
      body: JSON.stringify(cursoEstudiante),
      headers:{"Content-Type":"application/json"}
    })
    navigate('/home')
  } catch (error) {
    console.log("error")
  }
  
  }

  // PARA LOS CAMBIOS DENTRO DE LOS IMPUTS
  const handleChange=(e)=>{
    setInputestudiante({...inputEstudiante,[e.target.name]: e.target.value})
    
    setCursoEstudiante({
      id_estudiante: idEstudiante.current.value,
      id_curso:idCurso.current.value 
    })
  }
  
  
  


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
        ref={idEstudiante}
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
        <Form.Label>Curso del estudiante</Form.Label>
        <Form.Control 
        name="curso_estudiante"
        type="text" 
        placeholder="Ingresa curso del estudiante"
        onChange={handleChange}
        ref={idCurso}
     
        />
         <Form.Text className="text-muted">
          Debes ingresar el codigo de tu curso: puedes consultarlo en tu apartado de "Cursos"
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
<br />

      <Button 
      variant="dark"
      type="submit" >
        Registrar
      </Button>
        </Form>
    </div>
  )
}
