import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import { getStorage,ref ,uploadBytes, getDownloadURL} from "firebase/storage";
import { useRef } from 'react';
import { LoadingUX } from './LoadingUX';


export function Editar_Pregunta({
    validarMultiple,
     setValidarMultiple,
      setLoading,
       viewEdit,
        setViewEdit,
         preguntaEditar,
        validarAbierta,
        validarFV
        }){

    const [idFoto, setIDFoto]= useState()
    const [inputFoto, setInputFoto] = useState(null)
    const [uploading, setUploading] = useState()
    const [establecer, setEstablecer]= useState(false)
/// referencias para edicion
    const preguntatextRef =useRef(null);
    const respuestaRef =useRef(null);
    const dificultadRef=useRef(null);
    const puntajeRef = useRef(0); 
    
    const opcionARef= useRef(null)
    const opcionBRef= useRef(null)
    const opcionCRef= useRef(null)
    const opcionDRef= useRef(null)
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


    const handleClose = ()=>{
        setViewEdit(false)
        setLoading(false)
        setValidarMultiple(false)
        console.log(preguntaEditar)
    }
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

    const handleFileChange = (event) => {
        event.preventDefault()
        setInputFoto(event.target.files[0])
        handleIdFoto()
        setEstablecer(true)
        
      };
      

      const handleupload = async (event) =>{
       
        setUploading(true)
        if(inputFoto !== null){
   
        try {
         
            const storageRef = ref(storage, idFoto)
            await  uploadBytes(storageRef,inputFoto)
            const url = await  getDownloadURL(storageRef)
            preguntaEditar.link_foto_pregunta= url
            console.log(url)
            
        } catch (error) {
            console.error('Error al subir el archivo', error)
            alert('Error interno por favor intente mas tarde')
        }
        
      } else if(inputFoto === null){
         
         console.log("papi no sirvio")
          

          
           
        }
      setUploading(false)
         
      }


const handleChange =() =>{
    preguntaEditar.text_pregunta = preguntatextRef.current.value
    preguntaEditar.puntaje_pregunta = puntajeRef.current.value
    preguntaEditar.dificultad_pregunta = dificultadRef.current.value
    preguntaEditar.respuesta_correcta = respuestaRef.current.value
    preguntaEditar.opcion_a = opcionARef.current.value
    preguntaEditar.opcion_b = opcionBRef.current.value
    preguntaEditar.opcion_c = opcionCRef.current.value
    preguntaEditar.opcion_d = opcionDRef.current.value
}
const handleUpdate = async() =>{
  setUploading(true)
 
    if(validarAbierta===true){
      const res = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/preguntas/${preguntaEditar.id_pregunta}`,{
                method:'PUT',
                body: JSON.stringify({
                  text_pregunta:preguntaEditar.text_pregunta,
                  dificultad_pregunta:preguntaEditar.dificultad_pregunta,
                  tipo:preguntaEditar.tipo,
                  puntaje_pregunta:preguntaEditar.puntaje_pregunta,
                  link_foto_pregunta:preguntaEditar.link_foto_pregunta
                }),
                headers:{"Content-Type":"application/json"}
              })
     const res3 = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/update/preguntaabierta/${preguntaEditar.id_pregunta}`,{
      method:'PUT',
      body: JSON.stringify({
        respuesta_correcta:preguntaEditar.respuesta_correcta
      }),
      headers:{"Content-Type":"application/json"}
    })
    }
    if(validarFV===true)
    {
      try {
        const res = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/preguntas/${preguntaEditar.id_pregunta}`,{
                method:'PUT',
                body: JSON.stringify({
                  text_pregunta:preguntaEditar.text_pregunta,
                  dificultad_pregunta:preguntaEditar.dificultad_pregunta,
                  tipo:preguntaEditar.tipo,
                  puntaje_pregunta:preguntaEditar.puntaje_pregunta,
                  link_foto_pregunta:preguntaEditar.link_foto_pregunta
                }),
                headers:{"Content-Type":"application/json"}
              })
              console.log(preguntaEditar.dificultad_pregunta)
      const res2 = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/update/falsoverdadero/${preguntaEditar.id_pregunta}`,{
        method:'PUT',
        body: JSON.stringify({
          respuesta_correcta:preguntaEditar.respuesta_correcta
        }),
        headers:{"Content-Type":"application/json"}
      })
      } catch (error) {
        console.log(error)
      }
      
    }
    if(validarMultiple===true)
   {
    try {
      const res = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/preguntas/${preguntaEditar.id_pregunta}`,{
                method:'PUT',
                body: JSON.stringify({
                  text_pregunta:preguntaEditar.text_pregunta,
                  dificultad_pregunta:preguntaEditar.dificultad_pregunta,
                  tipo:preguntaEditar.tipo,
                  puntaje_pregunta:preguntaEditar.puntaje_pregunta,
                  link_foto_pregunta:preguntaEditar.link_foto_pregunta
                }),
                headers:{"Content-Type":"application/json"}
              })
              
      const res4 = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/update/multiplerespuesta/${preguntaEditar.id_pregunta}`,{
        method:'PUT',
        body: JSON.stringify({
          opcion_a: preguntaEditar.opcion_a,
          opcion_b:preguntaEditar.opcion_b,
          opcion_c:preguntaEditar.opcion_c,
          opcion_d:preguntaEditar.opcion_d,
          respuesta_correcta:preguntaEditar.respuesta_correcta
        }),
        headers:{"Content-Type":"application/json"}
      })
    } catch (error) {
      console.log(error)
    }
   }
   setUploading(false)
   setViewEdit(false)
   
}






    return(
        <>
        <Modal 
    show = {viewEdit}
    onHide={handleClose}  
    backdrop="static"
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >  <Modal.Header closeButton>
  <Modal.Title id="contained-modal-title-vcenter">
    <p>Editar:{preguntaEditar.id_pregunta}</p>
    
  </Modal.Title>
</Modal.Header>
    <Modal.Body>
    <h6>Tipo de pregunta :{preguntaEditar.tipo}</h6>
    <img 
    height="200"
    width="400"
    src={preguntaEditar.link_foto_pregunta} alt="" />
<h6>Cambiar imagen de apoyo</h6>
<Form.Control
        type="file"
        id="PuntajePregunta"
        aria-label="Default select example"
        onChange={handleFileChange}
       
      />

<br/>
<Button onClick={handleupload} variant='danger' disabled={establecer === false}>Establecer como nueva foto de apoyo.</Button>
<p>después de seleccionar la nueva foto de apoyo, debes establecerla.</p>
 <h6>Pregunta:</h6>

 <Form.Control 
      type="text"
      ref={preguntatextRef}
      defaultValue={preguntaEditar.text_pregunta}
      onChange={handleChange}
       />
       <h6>Puntaje asignado:</h6>

<Form.Control 
     type="number"
     ref={puntajeRef}
     defaultValue={preguntaEditar.puntaje_pregunta}
     onChange={handleChange}
      />
      <div>
      {
        validarAbierta ? <>
        <h6>Respuesta Correcta:</h6>
        <Form.Control 
        ref={respuestaRef}
        onChange={handleChange}
             type="text"
             defaultValue={preguntaEditar.respuesta_correcta}
            
              />  </> : ""
      }
     </div>
     <div>
      {
        validarMultiple ? <>
        <h6>Respuesta Correcta:</h6>
        <Form.Select 
        ref={respuestaRef}
        onChange={handleChange}
       aria-label="Default select example">
        <option value={preguntaEditar.respuesta_correcta}>{preguntaEditar.respuesta_correcta}</option>
     <option value="A">A</option>
     <option value="B">B</option>
     <option value="C">C</option>
     <option value="D">D</option>
       </Form.Select>    </> : ""
      }
     </div>
     <div>
      {
        validarFV ? <>
        <h6>Respuesta Correcta:</h6>
        <Form.Select 
        ref={respuestaRef}
        onChange={handleChange}
        aria-label="Default select example">
          <option value={preguntaEditar.respuesta_correcta}>{preguntaEditar.respuesta_correcta}</option>
        <option value="Verdadero">Verdadero</option>
        <option value="Falso">Falso</option>
      </Form.Select>   </>: ""
      }
     </div>

      

<h6>Dificultad</h6>
<Form.Select 
        ref={dificultadRef}
        onChange={handleChange}
        aria-label="Default select example">
      <option value={preguntaEditar.dificultad_pregunta}>{preguntaEditar.dificultad_pregunta}</option>
      <option value="Facil">Facil</option>
      <option value="Media">Media</option>
      <option value="Dificil">Dificil</option>
        </Form.Select>  

<p>La primera opción siempre será la dificultad actual.</p>











<div>{validarMultiple ? <>
    <h6>Opcion A:</h6>
    <Form.Control 
    ref={opcionARef}
      type="text"
      defaultValue={preguntaEditar.opcion_a}
      onChange={handleChange}
       />
       <h6>Opcion B:</h6>
 <Form.Control 
 ref={opcionBRef}
      type="text"
      defaultValue={preguntaEditar.opcion_b}
      onChange={handleChange}
       />
       <h6>Opcion C:</h6>
 <Form.Control 
 ref={opcionCRef}
      type="text"
      defaultValue={preguntaEditar.opcion_c}
      onChange={handleChange}
       />
       <h6>Opcion D:</h6>
 <Form.Control 
 ref={opcionDRef}
      type="text"
      defaultValue={preguntaEditar.opcion_d}
      onChange={handleChange}
       />
</>




: ""}</div>
 








    </Modal.Body>
    <Modal.Footer>
        <Button variant="dark" onClick={handleUpdate}>Terminar edición</Button>
        </Modal.Footer>
  </Modal>

 <LoadingUX show={uploading} setLoading={setUploading}></LoadingUX>
  </>
    )
}