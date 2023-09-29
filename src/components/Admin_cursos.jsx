import "../estilos/estiloregistro.css"
import { useState } from "react"
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Admin_cursos({logueado, permisoAdmin}){

    const idDelete = useRef(null)
    const idDeleteAlumno = useRef(null)
    const navigate =useNavigate()
    const[inputCurso, setInputCurso]=useState({
    id_curso: "",
    nombre_grado: "",
    descripcion_grado: "",
    id_profesor: ""
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
         const res1 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/curso',{
          method:'POST',
          body: JSON.stringify(inputCurso),
          headers:{"Content-Type":"application/json"}
        })
        navigate('home')
        } catch (error) {
            
        }
    }

    const handleChange=(e)=>{
        setInputCurso({...inputCurso,[e.target.name]: e.target.value})}



        const handleDelete = async (e)=>{
            e.preventDefault()
            try {
                const res = axios.delete(`https://proyecto-backend-william-david-morales.onrender.com/curso/${idDelete.current.value}`)
                navigate('/home')
            } catch (error) {
                console.log(error)
            }
        }    

        const handleDeleteAlumno = async (e)=>{
            e.preventDefault()
            try {
                const res = axios.delete(`https://proyecto-backend-william-david-morales.onrender.com/cursos/estudiantes/${idDeleteAlumno.current.value}`)
                navigate('/home')
            } catch (error) {
                cosole.log(error)
            }
        }
    if(logueado === true && permisoAdmin === true)return(
        <div className="container">
            <div className="estilodocente">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <h6>Crear un curso</h6>
            <Form.Label>Identificación del curso :</Form.Label>
            <Form.Control 
                name="id_curso"
                type="text" 
                onChange={handleChange}
                       />   
            </Form.Group>
            <Form.Group className="mb-3" >
                
            <Form.Label>Nombre del curso :</Form.Label>
            <Form.Control 
                name="nombre_grado"
                type="text" 
                onChange={handleChange}
                       />   
            </Form.Group>
            <Form.Group className="mb-3" >
                
            <Form.Label>Una descripcion del curso:</Form.Label>
            <Form.Control 
                name="descripcion_grado"
                type="text" 
                onChange={handleChange}
                       />   
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Asigne un director al curso:</Form.Label>
                <Form.Control 
                    name="id_profesor"
                    type="text" 
                    placeholder="id docente" 
                    onChange={handleChange}
                           />  
                <Form.Label>Id Docente, recuerde que el docente debe estar registrado previamente</Form.Label> 
                </Form.Group>
       
     
      <Button 
      variant="dark"
      type="submit" >
       Crear Curso
      </Button>
        </Form>
            </div>
            <div className="estilodocente">
            <Form onSubmit={handleDelete}>
            <Form.Group className="mb-3" >
                <h6>Retirar Docente</h6>
                <p>Recuerda que para eliminar un Docente primero debes retirarlo de sus respectivos cursos.</p>
            <Form.Label>Identificación del docente :</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                ref={idDelete}  
              
                                    />
   
            </Form.Group>
       
     
      <Button 
      variant="dark"
      type="submit" >
       Eliminar
      </Button>
    <br />
        </Form>
        <Form onSubmit={handleDeleteAlumno}>
            <Form.Group className="mb-3" >
                <br />
                <h6>Retirar Estudiante</h6>
                <p>Recuerda que para eliminar un Docente primero debes retirarlo de sus respectivos cursos.</p>
            <Form.Label>Identificación del docente :</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                ref={idDeleteAlumno}  
              
                                    />
   
            </Form.Group>
       
     
      <Button 
      variant="dark"
      type="submit" >
       Eliminar
      </Button>
        </Form>
            </div>







        </div>

    )
}