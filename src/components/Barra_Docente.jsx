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


export function Barra_Docente({setLogueado, HandleLogout}) {
    const handleLogout = (e)=>{
        setLogueado(false)
        navigate("/")
        HandleLogout()
        
        }
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
          
        }
        
        const  handleHome = (e) =>{
          navigate("/home")
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
        }
        const  handleRegistroAlumnos = (e) =>{
          navigate("/registro/alumnos")
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
        }
        const  handleCrearPregunta = (e) =>{
          navigate("/crear/pregunta")
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
        }
        const handleCurso = (e) =>{
          navigate("/curso")
          setVerRank(false)
          setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
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
          onClick={handleHome }>Home</Nav.Link>
        <Nav.Link 
          onClick={handleCrearPregunta}>Crear Pregunta</Nav.Link>
        <Nav.Link 
          onClick={handleRanking}>Ver Ranking</Nav.Link>
        <Nav.Link onClick={handleCurso}
          >Cursos</Nav.Link>
        <Nav.Link onClick={handleRegistroAlumnos}>Registrar Estudiante</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
          <Button
            variant="outline-secondary"
            onClick={handleLogout}
            >Log out</Button>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  
<Ver_ranking rankEstudiantes={rankEstudiantes}  verRank={verRank}/>
<Curso />
 </>
    )
    
}