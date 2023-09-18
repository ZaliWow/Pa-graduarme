import { useState } from "react"
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import '../estilos/estiloregistro.css'
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"

export function Docentes({logueado, permisoAdmin}) {

    const idDelete = useRef(null)
    const idCurso = useRef(null)
    const idDocente = useRef(null)
    const navigate = useNavigate()
    const [inputDocente, setInputDocente]= useState({
        id_profesor: "",
        nombre_profesor: "",
        apellido_profesor: "",
        correo_profesor: "",
        contra_profesor: ""
    })
    const [ID_DOCENTE, setID_DOCENTE]= useState({
      id_profesor: "",
    })
    
    const handleChange=(e)=>{
        setInputDocente({...inputDocente,[e.target.name]: e.target.value})}

        const handleSubmit = async (e)=>{
            e.preventDefault()
            try {
              const res = await fetch('http://localhost:4000/profesor',{
                method:'POST',
                body: JSON.stringify(inputDocente),
                headers:{"Content-Type":"application/json"}
              })
              navigate('/home')
            } catch (error) {
              console.log(error)
            }
            
            }
            const handleChangeidDocente = async (e)=>{
              setID_DOCENTE({
                id_profesor: idDocente.current.value
              })
            }


            const handleDelete = async (e)=>{
                e.preventDefault()
                try {
                    const res = axios.delete(`http://localhost:4000/profesor/${idDelete.current.value}`)
                    navigate('/home')
                } catch (error) {
                    console.log(error)
                }
            }

            const handleUpdateCurso = async  (e)=>{
              e.preventDefault()
              try {
                const res2 = await fetch(`http://localhost:4000/editar/curso/docente/${idCurso.current.value}`,{
                  method:'PUT',
                  body: JSON.stringify(ID_DOCENTE),
                  headers:{"Content-Type":"application/json"}
        
                })
              } catch (error) {
                console.log(error)
              }
            }





if(logueado ===true && permisoAdmin=== true)return(
        <div className="container" >
            <div className="estilodocente">
            <h6>Registrar Docente</h6>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" > 
            <Form.Label>Identificación</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                onChange={handleChange}
              
                                    />
   
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
                name="nombre_profesor"
                type="text" 
                placeholder="Ingresa el nombre del estudiante"
                onChange={handleChange}
                                     />
     
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
                name="apellido_profesor"
                type="text" 
                placeholder="Ingresa el apellido del estudiante" 
                onChange={handleChange}
                                    />
            </Form.Group>
      
            <Form.Group className="mb-3" >
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control 
                name="correo_profesor"
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
        name="contra_profesor"
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

            <div className="estilodocente">

            <Form onSubmit={handleDelete}>
            <Form.Group className="mb-3" >
                <h6>Eliminar Docente</h6>
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
        </Form>
        
        <Form onSubmit={handleUpdateCurso}>
            <Form.Group className="mb-3" >
              <br />
                <h6>Asignar Curso a Docente</h6>
                <p>Puedes asignar docentes a cursos ya existentes con su respectivo id</p>
            <Form.Label>Identificación del curso:</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                ref={idCurso}  
                
              
                                    />
            <Form.Label>Identificación del docente :</Form.Label>
            <Form.Control 
                name="id_profesor"
                type="text" 
                placeholder="Ingresa la identificacion del estudiante" 
                ref={idDocente}  
                onChange={handleChangeidDocente}
                                    />
   
            </Form.Group>
       
     
      <Button 
      variant="dark"
      type="submit" >
       Asignar
      </Button>
        </Form>
            </div>

        </div>
    )
}