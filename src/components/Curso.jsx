import "../estilos/estudiantes.css"
import "../estilos/examen.css"
import { Button } from "react-bootstrap"
import axios from 'axios'
import { useState } from "react"
import { Revision } from "./Revision"

export function Curso({userDocente,
logueado,
permisoDocente,
cursos
}) {
const [mostrarEstudiantes, setMostrarEstudiantes] = useState(false)
const [mostrarRevision, setMostrarRevision] = useState(false)
const [listaRevisar, setListaRevisar] = useState([
{
    id_examen: "",
    fecha_examen: "",
    id_estudiante: ""
},
])
const [listaEstudiantes, setListaEstudiantes] = useState([
    { id_estudiante:""}
]
   )
const[infoEstudiantes, setInfoEstudiantes]= useState([
    {
        id_estudiante: "",
        nombre_estudiante: "",
        apellido_estudiante: "",
        correo_estudiante: "",
        puntaje: "",
        contra_estudiante: ""

    }
])
const handleBackCurso =(e)=>{
    setListaEstudiantes([{
        id_estudiante:""
    }])
    setInfoEstudiantes([{
        id_estudiante: "",
        nombre_estudiante: "",
        apellido_estudiante: "",
        correo_estudiante: "",
        puntaje: "",
        contra_estudiante: ""
    }])
    setMostrarEstudiantes(false)
}
const handleEstudiantesCurso = async (idCurso)=>{
    try {
       const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/students/curso/${idCurso}`)
       for(let i=0; res.data.length > i; i++ ){
        const result = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes/${res.data[i].id_estudiante}`)
        setListaEstudiantes(listaEstudiantes => [...listaEstudiantes, res.data[i]])
        setInfoEstudiantes(infoEstudiantes  => [...infoEstudiantes, result.data[0]])
        
        
    }
    console.log(infoEstudiantes)
       setMostrarEstudiantes(true)
    } catch (error) {
       console.log(error)
    }
  
}
  
const handleRevisar = async (idEstudiante)=>{
 setMostrarRevision(true)
  setMostrarEstudiantes(false)

    try {
        const res = await  axios.get(`https://proyecto-backend-william-david-morales.onrender.com/datos/examenes/estudiante/${idEstudiante}`)
        for(let i=0; res.data.length > i; i++ ){
            setListaRevisar(listaRevisar  => [...listaRevisar, res.data[i]])   
            
        }
    } catch (error) {
        console.log(error)
    }
}

    if(logueado === true && mostrarEstudiantes===false && mostrarRevision===false)return(
        <div>
            <div >
            {cursos.slice(1).map((element, index )=>(
                
    <div
    className="estiloExamen"
    controls
    key={index }>
        
        <h6
     controls
     key={index}
      >Tu grado es :
   
      </h6>
      <p> {element.nombre_grado}</p>
      <h6> El id de tu curso :</h6>
      <p>{element.id_curso}</p>
      <h6
       controls 
       >
        Descripción del curso : 
       
       </h6>
       <p> {element.descripcion_grado}</p>
       <Button variant="dark" id="idCursos" onClick={() => handleEstudiantesCurso(element.id_curso)}>Obtener Estudiantes</Button>
    </div>            
    
               
   
      ))}

            </div>
        </div>
    )
    if(logueado ===false) return(
        <p>Por favor logueate</p>
    )

    if(logueado===true && mostrarEstudiantes === true) return(
        <div>
            <div className="estiloExamen">
                <h1>¡Bienvenido a tu curso!</h1>
                <br />
            <Button variant="dark" onClick={handleBackCurso}> Volver a mis cursos</Button>
            </div>
              
           <div >
            {infoEstudiantes.slice(1).map((element, index )=>(
                
    <div
    className="estiloEstudiantes"
    controls
    key={index }>
        
        <h6
     controls
     key={index}
      >Estudiante:
   
      </h6>
      <h6>Informacion Personal del estudiante</h6>
       <p>Id_estudiante :  {element.id_estudiante}</p>
       <p>Correo_estudiante : {element.correo_estudiante}</p> 
       <p>Nombre_estudiante : {element.nombre_estudiante}</p> 
       <p>Apellido_estudiante : {element.apellido_estudiante}</p>  
       <p>Correo_estudiante : {element.apellido_estudiante}</p> 
       <p>Contraseña_estudiante : {element.contra_estudiante}</p>

         <Button onClick={() => handleRevisar(element.id_estudiante)} className="botonBack" variant="dark">Ver pruebas</Button>   
  </div>            
             
   
      ))}

            </div>
            <Revision 
     mostrarRevision={mostrarRevision} 
     setMostrarRevision={setMostrarRevision}
      /> 
        </div>
    )

    if(mostrarRevision===true)return(
        <Revision 
        mostrarRevision={mostrarRevision} 
        setMostrarRevision={setMostrarRevision}
        listaRevisar={listaRevisar}
        setMostrarEstudiantes={setMostrarEstudiantes}
        setListaRevisar={setListaRevisar}
         /> 
    )

}