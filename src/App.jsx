import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import{Barra_opciones} from "./components/Barra_opciones";
import {Loguin} from "./components/Loguin";
import { Registro_Estudiantes } from "./components/Registro_Estudiantes";
import { Home } from "./components/Home";
import { Crear_Pregunta } from './components/Crear_Pregunta';
import { Bienvenido } from './components/Bienvenido';
import {Ver_ranking} from './components/Ver_ranking';

import { useState } from 'react';
function App() {
  const [logueado, setLogueado]=useState(false)
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
    setLogueado={setLogueado}
    Logueado ={logueado}
    /> 
   <Routes>
    <Route
    path='/'
    element={<Bienvenido Logueado={logueado}/>}>
    </Route>
    <Route 
    path="/loguin" 
    element={<Loguin setLogueado={setLogueado} setUsuario={setUsuario} user={usuario}/>}
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
   </Routes>
   </BrowserRouter>
 
  )
}

export default App
