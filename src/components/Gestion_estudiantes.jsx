import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import '../estilos/estiloregistro.css'
import {useState, useRef} from "react"
import axios from "axios"


export function Gestion_estudiantes({Logueado, permisoAdmin}) {

const idEstudianteRef = useRef(null)
const idEstudianteDeleteRef =useRef(null)

const[idCurso, setIdCurso] = useState({
id_curso:""
})
const idCursoRef = useRef(null)
    const handleChange=(e)=>{
setIdCurso({
id_curso:idCursoRef.current.value
})

    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const res = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/cursos/estudiantes/${idEstudianteRef.current.value}`,{
                method:'PUT',
                body: JSON.stringify(idCurso),
                headers:{"Content-Type":"application/json"}
              })
        } catch (error) {
            console.log(error)
        }
    
    }
    const handleDelete = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.delete(`https://proyecto-backend-william-david-morales.onrender.com/cursos/estudiantes/${idEstudianteDeleteRef.current.value}`)
           } catch (error) {
            console.log(error)
        }
    
    }

    if(Logueado===true && permisoAdmin===true )return(
        <div className="container">
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
      type="submit" >
        Registrar
      </Button>
        </Form>
        </div>






        </div>
    )
}