import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../estilos/estilologuin.css'
import { Errores } from '../components/errores';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  axios  from 'axios';
import { Container } from 'react-bootstrap';
import { useRef } from 'react';
export  function Loguin({
  setLogueado,
  setUsuario,
  user,
  setPermisoDocente,
  userDocente,
  setDocente,
  cursos,
  setCursos,
  setPermisoAdmin,
  setInsignias,
  insignias, 
  infoInsignias,
  setInfoInsignias
  
}) {
  
const tipoUsuarioRef = useRef(null)

const [correoEstudiante, setCorreoEstudiante]=useState('')
const [contraEstudiante, setContraEstudiante]=useState('')
const [idEstudiante, setIdEstudiante]=useState('')

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
//funcion para hacer pruebas sin la base de datos ni el backend operando porque que fastidio
const loguearse =(e)=>{
  e.preventDefault()
  if (tipoUsuarioRef.current.value==="estudiante"){
    setLogueado(true)
    navigate('/home')
    setPermisoDocente(false)
  } else if(tipoUsuarioRef.current.value==="docente"){
    setPermisoDocente(true)
    setLogueado(true)
    navigate('/home')
  }

 // console.log(tipoUsuarioRef.current.value)
  //e.preventDefault()
  //navigate('/home')
 // setLogueado(true)
}
// ESTA FUNCION FLECHA ASINCRONA (PUES HACE UN LLAMADO AL SERVIDOR)
// ES LA QUE VALIDA LAS CREDENCIALES DEL USUARIO QUE INTENTA LOGUEARSE

const handleSubmit = async(e)=>{
  e.preventDefault()

if (tipoUsuarioRef.current.value==="estudiante") {
  try {
    const res = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes')  
    for(let i=0;res.data.length > i; i++){
      if(res.data[i].correo_estudiante === correoEstudiante && res.data[i].contra_estudiante === contraEstudiante)
      {
       
        setLogueado(true)
        setPermisoDocente(false)
        navigate('/home')
        setUsuario({...user, 
          id_estudiante: res.data[i].id_estudiante,
          puntaje_estudiante:res.data[i].puntaje,
          correo_estudiante:res.data[i].correo_estudiante,
          nombre_estudiante:res.data[i].nombre_estudiante,
          apellido_estudiante:res.data[i].apellido_estudiante,  
        })
        const res2 = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/insignias/estudiante/${res.data[i].id_estudiante}`)
        for(let i=0; res2.data.length > i; i++ ) { 
        setInsignias(insignias  => [...insignias, res2.data[i]])
        const res3 = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/insignia/${res2.data[i].id_insignia}`)
        setInfoInsignias(infoInsignias  => [...infoInsignias, res3.data[0]])
      }
      
      }
      
      else{
        setError(true)
      }
    
    }  
   } catch (error) {
    console.log(error)
   }
} else if (tipoUsuarioRef.current.value==="docente") {
  try{
const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/profesor/correo/${correoEstudiante}`)

if( res.data[0].contra_profesor === contraEstudiante)
{
  setLogueado(true)
  setPermisoDocente(true)
  navigate('/home')
  setDocente({
    ...userDocente,
    id_profesor: res.data[0].id_profesor,
    nombre_profesor: res.data[0].nombre_profesor,
    apellido_profesor: res.data[0].apellido_profesor,
    correo_profesor: res.data[0].correo_profesor
  })
const resdos =  await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/curso/${res.data[0].id_profesor}`)
for(let i=0;resdos.data.length > i; i++){
  setCursos((cursos=>[...cursos, resdos.data[i]]))
  console.log(resdos.data[i]) 
}



}else{
  setError(true)
}


  } catch (error){
    console.log(error)
  }
}else if(tipoUsuarioRef.current.value==="Admin"){
try {
  const restres = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/admin')  
  for(let i=0;restres.data.length > i; i++){
    if(restres.data[i].correo_admin === correoEstudiante && restres.data[i].contra_admin === contraEstudiante)
    {
  setLogueado(true)
    setPermisoAdmin(true)
    navigate('/home') }
    else{
      setError(true)
    }}

} catch (error) {

  
}
    
    

  }







} 


//PARA ENCONTRAR LOS CURSOS DEL DOCENTE
const handleCursos = async(e)=>{
console.log(userDocente.id_profesor)
const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/curso/${userDocente.id_profesor}`)
for(let i=0;res.data.length > i; i++){
  setCursos((cursos=>[...cursos, res.data[i]]))
  
}
console.log(cursos)
}

  return (
    <div >
      
    <Errores errors={error} setError={setError}/>
    <div className='estilologuin'>
    <Form.Label>¿Ocupacion?</Form.Label>
    <Form.Select  
    size="sm" 
    style={{width:"50%", height:"30px"}}
    ref={tipoUsuarioRef}> 
      <option value="estudiante" >Estudiante</option>
      <option value="docente">Docente</option>
      <option value="Admin">Administrador</option>
    </Form.Select>


    <Form 
    onSubmit={handleSubmit}
    >
    <Form.Group 
    className="mb-3" 
    controlId="formBasicEmail">
      <Form.Label>Correo usuario</Form.Label>
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
      <Form.Label>Contraseña</Form.Label>
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
  </div>
  </div>
  )
  
}
