import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import {useState} from 'react'
import { initializeApp } from 'firebase/app';
import { getStorage,ref ,uploadBytes, getDownloadURL} from "firebase/storage";
import { Preview_Abierta } from './Preview_Abierta';


export function Crear_respuesta_abierta({}) {

  const [mostrarPreview, setMostrarPreview]= useState(false)
    const navigate = useNavigate()
    const dificultadPreguntaAbiertaRef= useRef(null);
    const PreguntaAbiertaRef= useRef(null); 
    const respuestaCorrectaRef = useRef(null);
    const puntajeAbiertaRef = useRef(null);
//States de la foto
const [idFoto, setIDFoto]= useState()
const [inputFoto, setInputFoto] = useState(null)
const [urlFoto, setUrlFoto] = useState()
    // hook para body de la pregunta 
    const [inputPregunta, setInputPregunta] = useState({
      id_pregunta:"",
      text_pregunta:"",
      dificultad_pregunta:"",
      tipo:"",
      puntaje_pregunta:"",
      link_foto_pregunta:""
    })
    const [inputAbierta, setInputAbierta]= useState({
      id_abierta:"",
      respuesta_correcta:""
    })


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


    if(inputFoto!==null){
    event.preventDefault()
      try {
       
          const storageRef = ref(storage, idFoto)
          await  uploadBytes(storageRef,inputFoto)
          const url = await  getDownloadURL(storageRef)
          const idPregunta = crypto.randomUUID()
          setInputPregunta({
            id_pregunta:idPregunta,
            text_pregunta:PreguntaAbiertaRef.current.value,
            dificultad_pregunta:dificultadPreguntaAbiertaRef.current.value,
            tipo:"ABIERTA",
            puntaje_pregunta:puntajeAbiertaRef.current.value,
            link_foto_pregunta:url
          })
          setInputAbierta({
            id_abierta:idPregunta,
            respuesta_correcta:respuestaCorrectaRef.current.value
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
          text_pregunta:PreguntaAbiertaRef.current.value,
          dificultad_pregunta:dificultadPreguntaAbiertaRef.current.value,
          tipo:"ABIERTA",
          puntaje_pregunta:puntajeAbiertaRef.current.value,
          link_foto_pregunta:""
        })
        setInputAbierta({
          id_abierta:idPregunta,
          respuesta_correcta:respuestaCorrectaRef.current.value
        })
        setMostrarPreview(true)
      }

    }




 // la funcion handlesubmit por ahora muestra en consola los valores de los inputs
    //realizados por el docente ademas cierra el componente de crear pregunta abierta
    // y regresa al elegir pregunta(crearpregunta)
    const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
        const res1 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/preguntas',{
          method:'POST',
          body: JSON.stringify(inputPregunta),
          headers:{"Content-Type":"application/json"}
        })
        const res2 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/abierta',{
          method:'POST',
          body: JSON.stringify(inputAbierta),
          headers:{"Content-Type":"application/json"}
        })
        
        setMostrarPreview(false)
      } catch (error) {
        console.log("error")
      }
        
    } 
    const handleBack=(evento)=>{
      navigate('/crear/pregunta')
     }




     
    return(
      <>
        <div className="FormularioPreguntas">
        
        <section>
       
        <form onSubmit={handleSubmit}>
        <Form.Label htmlFor="inputPassword5">Elija la dificultad de su pregunta</Form.Label>  
        <Form.Select 
        ref={dificultadPreguntaAbiertaRef}
        aria-label="Default select example">
      <option value="Facil">Facil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Dificil</option>
        </Form.Select>  
<br />
    <Form.Label htmlFor="inputPassword5">Formule su pregunta</Form.Label>
      <Form.Control
        size="lg"
        ref ={PreguntaAbiertaRef}
        type="text"
        id="PreguntaAbierta"
        aria-label="Default select example"
      />
      <br />
   
      <Form.Label id="passwordHelpBlock" muted>
        Respuesta a esperar
      </Form.Label>
              <br />
              <Form.Control
  
        type="text"
        id="PreguntaAbierta"
        aria-label="Default select example"
        ref={respuestaCorrectaRef}
      />
      <br />
      <Form.Label id="passwordHelpBlock" muted>
        Asigne un puntaje a su pregunta
      </Form.Label>
      <br />
              <Form.Control
  
        type="number"
        id="PreguntaAbierta"
        aria-label="Default select example"
        ref={puntajeAbiertaRef}
      />
      <br />
      <Form.Label id="passwordHelpBlock" muted>
        Sube una imagen de apoyo
      </Form.Label>
      <br />
      
      <Form.Control
  
        type="file"
        id="PreguntaAbierta"
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

        <Preview_Abierta show={mostrarPreview} 
        setMostrarPreview={setMostrarPreview}
        inputPregunta={inputPregunta}
        inputAbierta={inputAbierta}
        confirmarPOST={handleSubmit} />
        <div className='footer'>
        <br />
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        
        </div>
        </>
    )
}