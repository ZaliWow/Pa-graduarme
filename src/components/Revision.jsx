import "../estilos/estudiantes.css"
import { Button } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { DataRevisar } from "./DataRevisar"
import { CircularProgress } from '@mui/material';


export function Revision({
    mostrarRevision,
    setMostrarRevision,
    listaRevisar,
    setMostrarEstudiantes,
    setListaRevisar
}){

const [mostrarAdvertencia,setMostrarAdvertencia]= useState(false)
const [loading, setLoading]= useState(false)
const [infoRevisar, setInfoRevisar] = useState([{
    id_registro_examen: "",
    id_pregunta: "",
    id_examen: "",
    respuesta_estudiante: "",
    fecha_examen: "",
    id_estudiante: "",
    text_pregunta: "",
    dificultad_pregunta: "",
    tipo: "",
    puntaje_pregunta: "",
    link_foto_pregunta: ""
},
])
const handleInfoRevisar = async (IdExamen)=>{
    setLoading(true)
    try {
        const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/examen/info/preguntas/${IdExamen}`)
        console.log(res.data)
        for(let i=0; res.data.length > i; i++ )
            setInfoRevisar(infoRevisar  => [...infoRevisar, res.data[i]])
        
        console.log(infoRevisar)
        setMostrarAdvertencia(true)
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}

const handleproba = ()=>{
    console.log(listaRevisar)
    setMostrarRevision(false)
    setMostrarEstudiantes(true)
    setListaRevisar([{
        id_examen: "",
        fecha_examen: "",
        id_estudiante: ""
    },])
}

    if(mostrarRevision === true)
    return(
        <div >
            <div className="estiloEstudiantes">
                <Button variant="dark" onClick={handleproba}>Volver a mis estudiantes</Button>
            </div>
            
        <div >
            {listaRevisar.slice(1).map((element, index )=>(
                
    <div
    className="estiloEstudiantes"
    controls
    key={index }>
        
        <h6
     controls
     key={index}
      >
   
      </h6>
      <h6>Informacion Personal del estudiante</h6>
       <p>Id_Examen :  {element.id_examen}</p>
       <p>Fecha de realizacion : {element.fecha_examen}</p>
       <p>Id_estudiante : {element.id_estudiante}</p>

      

         <Button disabled={loading===true} className="botonBack" variant="dark" onClick={()=> handleInfoRevisar(element.id_examen)}>{loading ? <CircularProgress color="inherit"></CircularProgress> : "ver examen"}</Button>   
  </div>            
             
   
      ))}

            </div>
            <DataRevisar show={mostrarAdvertencia} setMostrarAdvertencia={setMostrarAdvertencia} 
                            infoRevisar={infoRevisar} setInfoRevisar={setInfoRevisar}
            />
            </div>
    )
}