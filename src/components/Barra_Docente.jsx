import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link , useNavigate } from "react-router-dom";
import { Ver_ranking } from './Ver_ranking';
import { useState } from 'react';
import axios from 'axios';
import { Curso } from './Curso';
import { Modal_Elegir_Dificultad } from './Modal_Elegir_Dificultad';


export function Barra_Docente({setLogueado, HandleLogout}) {

    const [loading, setLoading]= useState(false)
    const [loadingCurso, setLoadingCurso]=useState(false)
    const [mostrarModal, setMostrarModal]=useState(false)
    const handleLogout = (e)=>{
        setLogueado(false)
        navigate("/")
        HandleLogout()
        
        }

        /////////////////////////////////////////////// para las updates
        const [verBank, setVerBank]= useState(false)
        const [preguntas, setPreguntas]= useState([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
        }])

        const [preguntasMultiples, setPreguntasMultiples]= useState([{
          id_pregunta: "",
          text_pregunta:"" ,
          dificultad_pregunta:"" ,
          tipo: "",
          puntaje_pregunta:"",
          link_foto_pregunta:"" ,
          id_multiple: "",
          opcion_a: "",
          opcion_b: "",
          opcion_c: "",
          opcion_d: "",
          respuesta_correcta:""
        }])
        const [pregutnasAbiertas, setPreguntasAbiertas]=useState([{
          id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""

        }])
        //////////////////////////////////////////////
        const navigate = useNavigate();
        const [verRank, setVerRank] = useState(false)
        const [rankEstudiantes, setRankEstudiantes] = useState([
          {
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },

        ])

        const handleRanking = async(e)=>{
          handleHome()
          setPreguntasMultiples([{
            id_pregunta: "",
            text_pregunta:"" ,
            dificultad_pregunta:"" ,
            tipo: "",
            puntaje_pregunta:"",
            link_foto_pregunta:"" ,
            id_multiple: "",
            opcion_a: "",
            opcion_b: "",
            opcion_c: "",
            opcion_d: "",
            respuesta_correcta:""
          }])
          setPreguntas([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
          }])
          setPreguntasAbiertas([{
            id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""
          }])
          setVerBank(false)
          setLoading(true)
          try {
            e.preventDefault()
          const res = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/rank/estudiantes')
          for(let i=0; res.data.length > i; i++ )
          setRankEstudiantes(rankEstudiantes => [...rankEstudiantes, res.data[i]])
          navigate("/ver/ranking")
          setVerRank(true)
          } catch (error) {
            console.log(error)
          }
          setLoading(false)
        }
        
        const  handleHome = (e) =>{
          navigate("/home")
          setVerRank(false)
          setVerBank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
          setPreguntas([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
          }])
          setPreguntasMultiples([{
            id_pregunta: "",
            text_pregunta:"" ,
            dificultad_pregunta:"" ,
            tipo: "",
            puntaje_pregunta:"",
            link_foto_pregunta:"" ,
            id_multiple: "",
            opcion_a: "",
            opcion_b: "",
            opcion_c: "",
            opcion_d: "",
            respuesta_correcta:""
          }])
          setPreguntasAbiertas([{
            id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""
          }])
        }
        const  handleRegistroAlumnos = (e) =>{
          navigate("/registro/alumnos")
          setVerRank(false)
          setVerBank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
          setPreguntas([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
          }])
          setPreguntasMultiples([{
            id_pregunta: "",
            text_pregunta:"" ,
            dificultad_pregunta:"" ,
            tipo: "",
            puntaje_pregunta:"",
            link_foto_pregunta:"" ,
            id_multiple: "",
            opcion_a: "",
            opcion_b: "",
            opcion_c: "",
            opcion_d: "",
            respuesta_correcta:""
          }])
          setPreguntasAbiertas([{
            id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""
          }])
        }
        const  handleCrearPregunta = (e) =>{
          navigate("/crear/pregunta")
          setVerBank(false)
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
          setPreguntas([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
          }])
          setPreguntasMultiples([{
            id_pregunta: "",
            text_pregunta:"" ,
            dificultad_pregunta:"" ,
            tipo: "",
            puntaje_pregunta:"",
            link_foto_pregunta:"" ,
            id_multiple: "",
            opcion_a: "",
            opcion_b: "",
            opcion_c: "",
            opcion_d: "",
            respuesta_correcta:""
          }])
          setPreguntasAbiertas([{
            id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""
          }])
        }
        const handleCurso = (e) =>{
          setLoadingCurso(true)
          setVerBank(false)
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
          setPreguntas([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
          }])
          setPreguntasMultiples([{
            id_pregunta: "",
            text_pregunta:"" ,
            dificultad_pregunta:"" ,
            tipo: "",
            puntaje_pregunta:"",
            link_foto_pregunta:"" ,
            id_multiple: "",
            opcion_a: "",
            opcion_b: "",
            opcion_c: "",
            opcion_d: "",
            respuesta_correcta:""
          }])
          setPreguntasAbiertas([{
            id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""
          }])
          navigate("/curso")
          setLoadingCurso(false)

        }
        const handleBank = (e)=>{
          setVerBank(false)
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
          setPreguntas([{
            id_pregunta: "",
            text_pregunta: "",
            dificultad_pregunta: "",
            tipo: "",
            puntaje_pregunta: "",
            link_foto_pregunta: "",
            id_pregunta_falso_verdadero: "",
            respuesta_correcta: ""
          }])
          setPreguntasMultiples([{
            id_pregunta: "",
            text_pregunta:"" ,
            dificultad_pregunta:"" ,
            tipo: "",
            puntaje_pregunta:"",
            link_foto_pregunta:"" ,
            id_multiple: "",
            opcion_a: "",
            opcion_b: "",
            opcion_c: "",
            opcion_d: "",
            respuesta_correcta:""
          }])
          setPreguntasAbiertas([{
            id_pregunta: "",
          text_pregunta: "",
          dificultad_pregunta: "",
          tipo: "",
          puntaje_pregunta: "",
          link_foto_pregunta: "",
          id_abierta: "",
          respuesta_correcta: ""
          }])
          setMostrarModal(true)
        }
        


    return(
        <>
  <Navbar bg="dark" color="white" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand >Proyect</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link 
          onClick={handleHome }>Principal</Nav.Link>
        <Nav.Link 
          onClick={handleCrearPregunta}>Crear Pregunta</Nav.Link>
        <Nav.Link 
          disabled={loading===true}
          onClick={handleRanking}>{loading ? "Obteniendo...": "Ver Ranking"}</Nav.Link>
        <Nav.Link onClick={handleCurso}
          >{loadingCurso ? "Obteniendo...": "Mis Cursos"}</Nav.Link>
        <Nav.Link onClick={handleRegistroAlumnos}>Registrar Estudiante</Nav.Link>
        <Nav.Link onClick={handleBank}>Banco de preguntas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
          <Button
            variant="outline-light"
            onClick={handleLogout}
            >Log out</Button>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  
<Ver_ranking  rankEstudiantes={rankEstudiantes}  verRank={verRank}/>
<Curso />

<Modal_Elegir_Dificultad 
mostrarModal={mostrarModal}
 setMostrarModal={setMostrarModal}
 verBank={verBank}
 preguntas={preguntas}
 setPreguntas={setPreguntas}
 setVerBank={setVerBank}
 preguntasMultiples={preguntasMultiples}
 setPreguntasMultiples={setPreguntasMultiples}
 setPreguntasAbiertas={setPreguntasAbiertas}
 preguntasAbiertas={pregutnasAbiertas}
 ></Modal_Elegir_Dificultad>
 </>
    )
    
}