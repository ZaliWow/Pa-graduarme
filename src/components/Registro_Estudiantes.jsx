import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import '../estilos/estiloregistro.css'
import { useState, useRef } from "react"
import { No_loguin } from "./No_loguin"
import { useNavigate } from "react-router-dom"
import { CircularProgress } from '@mui/material';


export  function Registro_Estudiantes({Logueado}) {
  if(Logueado===false)return (
    <No_loguin />
  )

  // para ux
  const [loading, setLoading]= useState(false)
  const [permisoSubmit, setPermisoSubmit]=useState(false)
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
const nombreRef = useRef(null)
const apellidoRef = useRef(null)
const correoRef= useRef(null)
const contraRef = useRef(null)
  // PARA CONTROLAR EL SUBMIT DEL FORMULARIO
  const handleSubmit = async (e)=>{
  e.preventDefault()
  setLoading(true)
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
  setLoading(false)
  }

  // PARA LOS CAMBIOS DENTRO DE LOS IMPUTS
  const handleChange=(e)=>{
    setInputestudiante({...inputEstudiante,[e.target.name]: e.target.value})
    
    setCursoEstudiante({
      id_estudiante: idEstudiante.current.value,
      id_curso:idCurso.current.value 
    })
    console.log(contraRef.current.value)
    console.log(nombreRef.current.value)
    console.log(apellidoRef.current.value)
    console.log(idCurso.current.value)
    console.log(idEstudiante.current.value)
    console.log(correoRef.current.value)
    if(contraRef.current.value !== "" && nombreRef.current.value !== "" && apellidoRef.current.value !== "" && idCurso.current.value !== "" && idEstudiante.current.value !== "" && correoRef.current.value !== ""){
      setPermisoSubmit(true)
    }else{
      setPermisoSubmit(false)
    }
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
        ref={nombreRef}
        />
     
      </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Apellido</Form.Label>
        <Form.Control 
        name="apellido_estudiante"
        type="text" 
        placeholder="Ingresa el apellido del estudiante" 
        onChange={handleChange}
        ref={apellidoRef}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control 
        name="correo_estudiante"
        type="email" 
        placeholder="Ingresa correo del estudiante"
        onChange={handleChange}
        ref={correoRef}
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
        ref={contraRef}
        />
      </Form.Group>
<br />

      <Button 
      variant="dark"
      type="submit" 
      disabled={permisoSubmit === false || loading=== true}
      >
       {loading ? <CircularProgress size={24} color="inherit"/>: 'Registrar'}
      </Button>
        </Form>
    </div>
  )
}
