import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import{Barra_opciones} from "./components/Barra_opciones";
import {Loguin} from "./components/Loguin";
import { Registro_Estudiantes } from "./components/Registro_Estudiantes";
import { Home } from "./components/Home";
import { Crear_Pregunta } from './components/Crear_Pregunta';
import { Bienvenido } from './components/Bienvenido';
import {Ver_ranking} from './components/Ver_ranking';
import { Crear_falso_verdadero } from './components/Crear_falso_verdadero';
import { Crear_multiple_respuesta } from './components/Crear_multiple_respuesta';
import { Crear_respuesta_abierta} from './components/Crear_respuesta_abierta';
import { useState, useRef } from 'react';
import { Hacer_Examen } from './components/Hacer_examen';

function App() {
  const [logueado, setLogueado]=useState(false)
  const [permisoDocente, setPermisoDocente] = useState(false)
  const[usuario, setUsuario]=useState({
    id_estudiante: "",
    puntaje_estudiante:"",
    correo_estudiante:"",
    nombre_estudiante:"",
    apellido_estudiante:"",
  })
    
  return (
  
    
   <BrowserRouter>
  <Barra_opciones
    PermisoDocente={permisoDocente}
    setLogueado={setLogueado}
    Logueado ={logueado}
    /> 
   <Routes>
    <Route
    path='hacer/examen'
    element={<Hacer_Examen Logueado={logueado}/>}
    ></Route>
    <Route
    path='/'
    element={<Bienvenido Logueado={logueado}/>}>
    </Route>
    <Route 
    path="/loguin" 
    element={<Loguin 
      setPermisoDocente={setPermisoDocente}
      setLogueado={setLogueado} 
      setUsuario={setUsuario} 
      user={usuario}/>}
    ></Route>
    <Route 
    path="/registro/alumnos" 
    element={<Registro_Estudiantes Logueado={logueado}/>}></Route>
    <Route 
    path="/home" 
    element={<Home user={usuario} Logueado={logueado}/>}></Route>
    <Route 
    path="/crear/pregunta" 
    element={<Crear_Pregunta Logueado={logueado}/>}></Route>
    <Route 
    path="/ver/ranking" 
    element={<Ver_ranking Logueado={logueado}/>}></Route>
    <Route
    path='/crear/pregunta/falso/verdadero'
    element={<Crear_falso_verdadero></Crear_falso_verdadero>}></Route>
    <Route
    path='/crear/pregunta/multiple/respuesta'
    element={<Crear_multiple_respuesta></Crear_multiple_respuesta>}></Route>
    <Route
    path='/crear/pregunta/respuesta/abierta'
    element={<Crear_respuesta_abierta></Crear_respuesta_abierta>}>
    </Route>
   </Routes>
  
   </BrowserRouter>
 
  )
}

export default App
