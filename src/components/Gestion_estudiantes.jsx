import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import '../estilos/estiloregistro.css'
import {useState, useRef} from "react"
import {LoadingUX} from './LoadingUX'
import axios from "axios"
import {Errorcambiocurso } from "./error_cambio_curso"


export function Gestion_estudiantes({Logueado, permisoAdmin}) {

const idEstudianteRef = useRef(null)
const idEstudianteDeleteRef =useRef(null)
const [validar, setValidar] = useState(false)
const [loading, setLoading] =useState(false)
const[controlError, setControlError] = useState(false)
const[idCurso, setIdCurso] = useState({
id_curso:""
})
const idCursoRef = useRef(null)


const handleChange=(e)=>{
setIdCurso({
id_curso:idCursoRef.current.value
})

if(idCursoRef.current.value === "" || idEstudianteRef.current.value === ""){
    setValidar(false)
}else{
    setValidar(true)
}

    }
    const handleSubmit = async (e)=>{
        setLoading(true)
        e.preventDefault()
        try {
            const res = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/cursos/estudiantes/${idEstudianteRef.current.value}`,{
                method:'PUT',
                body: JSON.stringify(idCurso),
                headers:{"Content-Type":"application/json"}
              })
              if(res.status == '404'){
                setLoading(false)
                setControlError(true)
              }
              console.log(res.status)
        } catch (error) {
            
        }
    setLoading(false)
    
    }
    const handleDelete = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.delete(`https://proyecto-backend-william-david-morales.onrender.com/cursos/estudiantes/${idEstudianteDeleteRef.current.value}`)
           } catch (error) {
           
        }
        setLoading(false)
    
    }

    if(Logueado===true && permisoAdmin===true )return(
        <div className="container">
            <Errorcambiocurso show={controlError} setMostrarAdvertencia={setControlError}></Errorcambiocurso>
            <div className="estilodocente">
<h6>Eliminar Estudiante</h6>
<Form onSubmit={handleDelete}>
            <Form.Group className="mb-3" > 
            <Form.Label>Identificación Estudiante</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
              
                ref={idEstudianteDeleteRef}
              
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

        <div className="estilodocente">
<h6>Editar Curso Estudiante</h6>
<Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" > 
            <Form.Label>Identificación Estudiante</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                onChange={handleChange}
                ref={idEstudianteRef}
              
                                    />
   
            </Form.Group>    
            <Form.Group className="mb-3" >     
            <Form.Label>Identificación Curso</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                onChange={handleChange}
                ref={idCursoRef}
              
                                    />
   
            </Form.Group>     

<br />

      <Button 
      variant="dark"
      type="submit" 
      disabled={validar===false}>
        Cambiar de curso
      </Button>
        </Form>
        </div>

        <LoadingUX show ={loading} setLoading={setLoading}></LoadingUX>
        

        </div>
    )
}