import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getStorage,ref ,uploadBytes, getDownloadURL} from "firebase/storage";
import { CircularProgress } from '@mui/material';
import { LoadingUX } from './LoadingUX';

import {Preview_FV} from './Preview_FV'

import 'firebase/storage';

export function Crear_falso_verdadero({}) {
    const navigate = useNavigate()
    //para ux
    const [permisoSubmit, setPermisoSubmit]=useState(false)
    const [loading, setLoading]=useState(false)
     // Aqui se crearon las variables para guardar la informacion de los inputs
    // realizada por el docente
    const preguntaVFRef =useRef(null);
    const respuestaVFRef =useRef(null);
    const dificultadVFRef=useRef(null);
    const puntajeVFRef = useRef(0); 
    //States de la foto
    const [idFoto, setIDFoto]= useState()
    const [inputFoto, setInputFoto] = useState(null)
    const [urlFoto, setUrlFoto] = useState()
    
    //para mostrar el model de la preview de la pregunta
    const [mostrarPreview, setMostrarPreview]= useState(false)

    //handleSubmit para subir la pregunta a la bdd
    const handleSubmit= async (e)=>{
      setMostrarPreview(false)
      setLoading(true)
      e.preventDefault()

      try {
        
        const res = await fetch('https://proyecto-backend-william-david-morales.onrender.com/preguntas',{
        method:'POST',
        body: JSON.stringify(inputPregunta),
        headers:{"Content-Type":"application/json"}

      })
      
        const res2 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/falso/verdadero',{
          method:'POST',
          body: JSON.stringify(inputFV),
          headers:{"Content-Type":"application/json"}

        })
      
       
      } catch (error) { 
        console.log("error")
      }
      setLoading(false)
      navigate("/crear/pregunta")
    }

    // VolverAlhome cierra el componente de crear pregunta abierta y abre el componente del home
   const handleBack=(evento)=>{
   // navigate('/crear/pregunta')
   console.log('aqui cambié')
   }
   // body para crear la pregunta 
   const [inputPregunta, setInputPregunta] = useState({
            id_pregunta:"",
            text_pregunta:"",
            dificultad_pregunta:"",
            tipo:"",
            puntaje_pregunta:"",
            link_foto_pregunta:""
   })
   //body para la respuesta y tipo F/V
   const [inputFV, setInputFV] = useState({
    id_pregunta_falso_verdadero:"",
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
  
  
};
const handleupload = async (event) =>{
  if(inputFoto !== null){
    setLoading(true)
event.preventDefault()
  try {
   
      const storageRef = ref(storage, idFoto)
      await  uploadBytes(storageRef,inputFoto)
      const url = await  getDownloadURL(storageRef)
      const idPregunta = crypto.randomUUID()
      setInputPregunta({
        id_pregunta:idPregunta,
            text_pregunta:preguntaVFRef.current.value,
            dificultad_pregunta:dificultadVFRef.current.value,
            tipo:"F/V",
            puntaje_pregunta:puntajeVFRef.current.value,
            link_foto_pregunta:url
       })

       setInputFV({
        id_pregunta_falso_verdadero:idPregunta,
            respuesta_correcta:respuestaVFRef.current.value
       })
       
  setMostrarPreview(true)
       
        
      
  } catch (error) {
      console.error('Error al subir el archivo', error)
      alert('Error interno por favor intente mas tarde')
  }
  setLoading(false)
} else if(inputFoto === null){
  setLoading(true)
    event.preventDefault()
    const idPregunta = crypto.randomUUID()
    setInputPregunta({
      id_pregunta:idPregunta,
          text_pregunta:preguntaVFRef.current.value,
          dificultad_pregunta:dificultadVFRef.current.value,
          tipo:"F/V",
          puntaje_pregunta:puntajeVFRef.current.value,
          link_foto_pregunta:""
     })

     setInputFV({
      id_pregunta_falso_verdadero:idPregunta,
          respuesta_correcta:respuestaVFRef.current.value
     })
    setLoading(false)
setMostrarPreview(true)
     
  }

   
}
  
    return(
        <>
        <div
        className ="FormularioPreguntas"
        > 
        <form onSubmit={handleSubmit}>
          
        <Form.Label htmlFor="inputPassword5">Elija la dificultad de su pregunta</Form.Label>  
        <Form.Select 
        ref={dificultadVFRef}
        aria-label="Default select example">
      <option value="Facil">Facil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Dificil</option>
        </Form.Select>  
        <br />
        <Form.Label htmlFor="inputPassword5">Formule su pregunta</Form.Label>
      <Form.Control
        ref ={preguntaVFRef}
        type="text"
        id="PreguntaAbierta"
        aria-label="Default select example"
        
      />
      <Form.Text id="passwordHelpBlock" muted>
        
      </Form.Text>
                <br />
      <Form.Label htmlFor="inputPassword5">Elija la respuesta correcta a su pregunta</Form.Label>  
      <Form.Select 
        ref={respuestaVFRef}
        aria-label="Default select example">
        <option value="Verdadero">Verdadero</option>
        <option value="Falso">Falso</option>
      </Form.Select> 
      <br />
      <Form.Label htmlFor="inputPassword5">Asigne un puntaje a su pregunta</Form.Label>
      <Form.Control
        ref={puntajeVFRef}
        type="number"
        id="PuntajePregunta"
        aria-label="Default select example"
        
      />
      <Form.Text id="passwordHelpBlock" muted>
      
      </Form.Text>
      <br />
      <Form.Label htmlFor="inputPassword5">Adjunte material de apoyo</Form.Label>
      <Form.Control
        type="file"
        id="PuntajePregunta"
        aria-label="Default select example"
        onChange={handleFileChange}
       
      />
      <Form.Text id="passwordHelpBlock" muted>
       
      </Form.Text>


        <br />
        <Button 
        variant="dark"
        onClick={handleupload}
        disabled={permisoSubmit===true || loading===true}
        >{loading ? <CircularProgress color="inherit"></CircularProgress> : "Subir Pregunta"}</Button>
        <br />
       
                </form>
               

         <br />       
         <Preview_FV 
        show={mostrarPreview}
        setMostrarPreview={setMostrarPreview}
        confirmarPOST ={handleSubmit}
        inputPregunta={inputPregunta}
        inputFV={inputFV}
        urlFoto={urlFoto}
        />   
        <LoadingUX show ={loading} setLoading={setLoading}></LoadingUX>
        </div> 
        <br />
        <div className='footer'>
        <br />
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        
        </div>
        </>
) 
}