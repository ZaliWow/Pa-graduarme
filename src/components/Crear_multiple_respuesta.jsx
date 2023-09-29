import "../estilos/formularios_preguntas.css"
import { useRef } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getStorage,ref ,uploadBytes, getDownloadURL} from "firebase/storage";
import { useState } from "react";
import { Preview_Multiple } from "./Preview_Multiple";

export function Crear_multiple_respuesta({}) {


  const [mostrarPreview, setMostrarPreview]= useState(false) 
// hooks para capturar los imputs del usuario
    const navigate = useNavigate()
    const dificultadMultipleRef=useRef(null);
    const preguntaMultipleRef = useRef(null);
    const opcionARef= useRef(null);
    const opcionBRef= useRef(null);
    const opcionCRef= useRef(null);
    const opcionDRef= useRef(null);
    const respuestaMultipleRef=useRef(null);
    const puntajeMultipleRef= useRef(0)
    //States de la foto
    const [idFoto, setIDFoto]= useState()
    const [inputFoto, setInputFoto] = useState(null)
    const [urlFoto, setUrlFoto] = useState()
    
//body para la peticion POST a la base de datos
const [inputPregunta, setInputPregunta] = useState({
  id_pregunta:"",
  text_pregunta:"",
  dificultad_pregunta:"",
  tipo:"",
  puntaje_pregunta:"",
  link_foto_pregunta:""
})
const [inputMultiple, setInputMultiple] = useState({
  id_multiple:"",
  opcion_a:"",
  opcion_b:"",
  opcion_c:"",
  opcion_d:"",
  respuesta_correcta:""
})
    // la funcion handlesubmit por ahora muestra en consola los valores de los inputs
    //realizados por el docente ademas cierra el componente de crear pregunta multiple
    // y regresa al elegir pregunta(crearpregunta)


// LOGICA PARA SUBIR LAS IMAGENES A FIRESTORE 
const handleIdFoto=(e) => {
  // Obtiene la fecha actual
const fechaActual = new Date();
// Obtiene los componentes de la fecha (día, mes y año)
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, por lo tanto, se suma 1
const año = fechaActual.getFullYear();

// Obtiene los componentes de la hora (hora, minutos y segundos)
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Crea un string con la fecha y hora actual
const fechaHoraString = `Song-Create:${dia}:${mes}:${año} ${hora}:${minutos}:${segundos}`;

// Realiza cualquier otra acción necesaria con el string de fecha y hora actual
setIDFoto(fechaHoraString)

}

// configuracion de permisos para la storage
    // nota: esta configuracion es predeterminada de la libreria de firebase en su storage web
         
// dar datos de configuracion a fb
const firebaseConfig = { 
  storageBucket: 'gs://proyecto-9a64e.appspot.com'
};
// inicializar firebase con la configuracion
const app = initializeApp(firebaseConfig);

// creo referencias 
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

const handleFileChange = (event) => {
  event.preventDefault()
  setInputFoto(event.target.files[0])
  handleIdFoto()
}
  
  const handleupload = async (event) =>{
    if(inputFoto !== null){
    event.preventDefault()
      try {
       
          const storageRef = ref(storage, idFoto)
          await  uploadBytes(storageRef,inputFoto)
          const url = await  getDownloadURL(storageRef)
          const idPregunta = crypto.randomUUID()
          setInputPregunta({
            id_pregunta:idPregunta,
            text_pregunta:preguntaMultipleRef.current.value,
            dificultad_pregunta:dificultadMultipleRef.current.value,
            tipo:"MULTIPLE",
            puntaje_pregunta:puntajeMultipleRef.current.value,
            link_foto_pregunta:url
          })
          setInputMultiple({
            id_multiple:idPregunta,
            opcion_a:opcionARef.current.value,
            opcion_b:opcionBRef.current.value,
            opcion_c:opcionCRef.current.value,
            opcion_d:opcionDRef.current.value,
            respuesta_correcta:respuestaMultipleRef.current.value
          })
          setMostrarPreview(true)
          
            
          
      } catch (error) {
          console.error('Error al subir el archivo', error)
          alert('Error interno por favor intente mas tarde')
      }} else if(inputFoto === null){
        event.preventDefault()
        const idPregunta = crypto.randomUUID()
          setInputPregunta({
            id_pregunta:idPregunta,
            text_pregunta:preguntaMultipleRef.current.value,
            dificultad_pregunta:dificultadMultipleRef.current.value,
            tipo:"MULTIPLE",
            puntaje_pregunta:puntajeMultipleRef.current.value,
            link_foto_pregunta:""
          })
          setInputMultiple({
            id_multiple:idPregunta,
            opcion_a:opcionARef.current.value,
            opcion_b:opcionBRef.current.value,
            opcion_c:opcionCRef.current.value,
            opcion_d:opcionDRef.current.value,
            respuesta_correcta:respuestaMultipleRef.current.value
          })
          setMostrarPreview(true)
      }
  
};
    const handleBack=(evento)=>{
      navigate('/crear/pregunta')
     }


//PARA ENVIAR A LA BASE DE DATOS 
const handleSubmit= async (e)=>{
  e.preventDefault()
  try {
    const res1 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/preguntas',{
      method:'POST',
      body: JSON.stringify(inputPregunta),
      headers:{"Content-Type":"application/json"}
    })
    const res2 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/multiple',{
      method:'POST',
      body: JSON.stringify(inputMultiple),
      headers:{"Content-Type":"application/json"}
    })
    setMostrarPreview(false)
  } catch (error) {
    
  }

}


return(
      <>
        <div
        className="FormularioPreguntas">
           <section>
           <form onSubmit={handleSubmit}>
           
        <Form.Label htmlFor="inputPassword5">Elija la dificultad de su pregunta</Form.Label>  
       <Form.Select 
       ref={dificultadMultipleRef}
       aria-label="Default select example">
     <option value="Facil">Facil</option>
     <option value="Media">Media</option>
     <option value="Dificil">Dificil</option>
       </Form.Select>  
       
       <br />
   <Form.Label htmlFor="inputPassword5">Formule su pregunta</Form.Label>
     <Form.Control
       ref ={preguntaMultipleRef}
       type="text"
       id="PreguntaMultiple"
       aria-label="Default select example"
     />
     <Form.Text id="passwordHelpBlock" muted>
      
     </Form.Text>
    
             <br />
             <Form.Label htmlFor="inputPassword5">Formule la opcion A</Form.Label>
     <Form.Control
       ref ={opcionARef}
       type="text"
       id="PreguntaMultiple"
       aria-label="Default select example"
     />
     
              <br />
              <Form.Label htmlFor="inputPassword5">Formule la opcion B</Form.Label>
     <Form.Control
       ref ={opcionBRef}
       type="text"
       id="PreguntaMultiple"
       aria-label="Default select example"
     />
              <br />
              <Form.Label htmlFor="inputPassword5">Formule la opcion C</Form.Label>
     <Form.Control
       ref ={opcionCRef}
       type="text"
       id="PreguntaMultiple"
       aria-label="Default select example"
     />
              <br />
              <Form.Label htmlFor="inputPassword5">Formule la opcion D</Form.Label>
     <Form.Control
       ref ={opcionDRef}
       type="text"
       id="PreguntaMultiple"
       aria-label="Default select example"
     />
              
      <br />
              <Form.Label htmlFor="inputPassword5">Elija la respuesta correcta</Form.Label>  
       <Form.Select 
       ref={respuestaMultipleRef}
       aria-label="Default select example">
     <option value="A">A</option>
     <option value="B">B</option>
     <option value="C">C</option>
     <option value="D">D</option>
       </Form.Select>  
<br />
              <Form.Label htmlFor="inputPassword5">Asigne un puntaje a su pregunta</Form.Label>  

      <Form.Control
       ref ={puntajeMultipleRef}
       type="number"
       id="PreguntaMultiple"
       aria-label="Default select example"
       onChange={handleFileChange}
     />
     <br />
     <Form.Label htmlFor="inputPassword5">Elija una imagen de apoyo</Form.Label>  

 <Form.Control
    
       type="file"
       id="PreguntaMultiple"
       aria-label="Default select example"
       onChange={handleFileChange}
     />
     <br />
       <Button 
       variant="dark"
       onClick={handleupload}
       >Subir pregunta</Button>
           <br />
           </form>
           </section>
           
           <br />       
           
       </div>
       <Preview_Multiple show={mostrarPreview} 
       setMostrarPreview={setMostrarPreview}
       confirmarPOST={handleSubmit}
       inputPregunta={inputPregunta}
       inputMultiple={inputMultiple} />      
<br />
<div className='footer'>
<br />
<p>&copy; 2023 Your Company. All rights reserved.</p>

</div>
</>
    )
}