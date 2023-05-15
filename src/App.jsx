import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import{Barra_opciones} from "./components/Barra_opciones";
import {Loguin} from "./components/Loguin";
import { Registro_Estudiantes } from "./components/Registro_Estudiantes";
import { Home } from "./components/Home";
import { Crear_Pregunta } from './components/Crear_Pregunta';
import { Bienvenido } from './components/Bienvenido';
import {Ver_ranking} from './components/Ver_ranking';
import { Info_inicio } from "./components/Info_inicio";
function App() {
  return (
   <BrowserRouter>
   <Bienvenido/>
   <Barra_opciones/>
   <Routes>
    <Route path='/' element={<Info_inicio/>}></Route>
    <Route path="/loguin" element={<Loguin/>}></Route>
    <Route path="/registro/alumnos" element={<Registro_Estudiantes/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/crear/pregunta" element={<Crear_Pregunta/>}></Route>
    <Route path="/ver/ranking" element={<Ver_ranking/>}></Route>
   </Routes>
   </BrowserRouter>
   
  )
}

export default App
