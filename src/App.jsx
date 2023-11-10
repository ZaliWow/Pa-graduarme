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
import { Curso } from './components/Curso';
import { Docentes } from './components/Docentes';
import { Admin_cursos } from './components/Admin_cursos';
import { Gestion_estudiantes } from './components/Gestion_estudiantes';
import { Medallas } from './components/medallas';



function App() {

  const [logueado, setLogueado]=useState(false)
  const [permisoDocente, setPermisoDocente] = useState(false)
  const [permisoAdmin, setPermisoAdmin] = useState(false)
  const [insignias, setInsignias]= useState([{
    id_registro: "",
    id_insignia: "",
    id_estudiante: ""
  }])
  const [infoInsignias, setInfoInsignias] =useState([{
    id_insignia: "",
    descripcion: "",
    forma_ganar: "",
    foto_insignia: ""
  }])
  const[usuario, setUsuario]=useState({
    id_estudiante: "",
    puntaje_estudiante:"",
    correo_estudiante:"",
    nombre_estudiante:"",
    apellido_estudiante:"",
  })
  const [docente, setDocente]= useState({
    id_profesor: "",
    nombre_profesor: "",
    apellido_profesor: "",
    correo_profesor: ""
  })
  const [cursos, setCursos]= useState([{
    id_curso: "",
      nombre_grado: "",
      descripcion_grado: "",
      id_profesor: ""
  }])

  const handleLogout = (e)=>{
    setLogueado(false)
    setPermisoAdmin(false)
    setPermisoDocente(false)
    setCursos([{
      id_curso: "",
        nombre_grado: "",
        descripcion_grado: "",
        id_profesor: ""
    }])
    setDocente([{
    id_profesor: "",
    nombre_profesor: "",
    apellido_profesor: "",
    correo_profesor: ""
    }])
    setUsuario([{
      id_estudiante: "",
    puntaje_estudiante:"",
    correo_estudiante:"",
    nombre_estudiante:"",
    apellido_estudiante:"",
    }])
    setInfoInsignias([{
      id_insignia: "",
    descripcion: "",
    forma_ganar: "",
    foto_insignia: ""
    }])
    setInsignias([{
      id_registro: "",
    id_insignia: "",
    id_estudiante: ""
    }])
    }
    const [puntajeEstudiante, setPuntajeEstudiante] = useState("")

  return (
  
    
   <BrowserRouter>
  <Barra_opciones
    PermisoDocente={permisoDocente}
    setLogueado={setLogueado}
    Logueado ={logueado}
    user={usuario}
    handleLogout={handleLogout}
    setUsuario={setUsuario}
    permisoAdmin={permisoAdmin}
    setPermisoAdmin={setPermisoAdmin}
    setInfoInsignias={setInfoInsignias}
    setInsignias={setInsignias}
    setPuntajeEstudiante={setPuntajeEstudiante}
   
    /> 
   <Routes>
    <Route
    path='hacer/examen'
    element={<Hacer_Examen Logueado={logueado}/>}
    ></Route>
    <Route
    path='/'
    element={<Bienvenido Logueado={logueado} infoInsignias={infoInsignias}
    setInfoInsignias={setInfoInsignias}/>}>
    </Route>
    <Route 
    path="/loguin" 
    element={<Loguin 
      setPermisoDocente={setPermisoDocente}
      setLogueado={setLogueado} 
      setUsuario={setUsuario} 
      user={usuario}
      userDocente = {docente}
      setDocente ={setDocente}
      cursos={cursos}
      setCursos={setCursos}
      setPermisoAdmin={setPermisoAdmin}
      setInsignias={setInsignias}
      insignias={insignias}
      infoInsignias={infoInsignias}
      setInfoInsignias={setInfoInsignias}
      />
      
    
    }
    ></Route>
    <Route 
    path="/registro/alumnos" 
    element={<Registro_Estudiantes Logueado={logueado}/>}></Route>
    <Route 
    path="/home" 
    element={<Home puntajeEstudiante={puntajeEstudiante} user={usuario} Logueado={logueado} insignias={insignias} infoInsignias={infoInsignias} permisoAdmin={permisoAdmin} permisoDocente={permisoDocente}/>}></Route>
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
    <Route
    path='/curso'
    element={<Curso 
    userDocente={docente} 
    logueado={logueado}
    permisoDocente={permisoDocente}
    cursos={cursos} 
 ></Curso>}>

    </Route>
    <Route
    path='/gestion/cursos'
    element={<Admin_cursos logueado={logueado} permisoAdmin={permisoAdmin}></Admin_cursos>}>
    </Route>
    <Route
    path='/Docentes'
    element={<Docentes logueado={logueado} permisoAdmin={permisoAdmin}></Docentes>}>
    </Route>
    <Route 
    path="/gestionar/estudiantes" 
    element={<Gestion_estudiantes Logueado={logueado} permisoAdmin={permisoAdmin}/>}></Route>
  
  
  <Route
    path="/medallas"
    element={<Medallas Logueado={logueado} permisoAdmin={permisoAdmin} />}>
    </Route>
   </Routes>
  
   </BrowserRouter>
 
  )
}

export default App
