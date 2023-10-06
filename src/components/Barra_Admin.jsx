import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Ver_ranking } from './Ver_ranking';
import { useState } from 'react';
import { Medallas } from './medallas';
import {LoadingUX} from './LoadingUX'
import axios from "axios"



export function Barra_Admin({setLogueado, HandleLogout}) {
  const navigate = useNavigate();
  const [loading, setLoading]= useState(false)
    const [verRank, setVerRank] = useState(false)
    const [verMedallas, setVerMedallas] = useState(false)
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


    const handleLogout = (e)=>{
        setLogueado(false)
        setVerMedallas(false)
        navigate("/")
        HandleLogout()
        
        }
    const handleDocente = (e)=>{ 
        setRankEstudiantes([{
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
        setVerRank(false)
        setVerMedallas(false)
        e.preventDefault()
        navigate("/Docentes")
    }
    const handleVerRanking= async (e)=>{
      handleHome()
     
      setLoading(true)
        
        try {
            e.preventDefault()
          const res = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/rank/estudiantes')
          for(let i=0; res.data.length > i; i++ )
          setRankEstudiantes(rankEstudiantes => [...rankEstudiantes, res.data[i]])
          setVerRank(true)
      navigate("/ver/ranking")
          setVerMedallas(false)
          } catch (error) {
            console.log(error)
          }
      setLoading(false)
      
      
    }
    const handleCursos = async (e)=>{
      setRankEstudiantes([{
        id_estudiante: "",
        nombre_estudiante: "",
        apellido_estudiante: "",
        correo_estudiante: "",
        puntaje: "",
        contra_estudiante: ""
      },])
      setVerRank(false)
      setVerMedallas(false)
      navigate("/gestion/cursos")
    }
    const handleHome= async (e)=>{
      setVerRank(false)
      setVerMedallas(false)
      navigate("/home")
      setRankEstudiantes([{
        id_estudiante: "",
        nombre_estudiante: "",
        apellido_estudiante: "",
        correo_estudiante: "",
        puntaje: "",
        contra_estudiante: ""
      },])
      
    }
    const handleEstudiantes = async (e)=>{
      setRankEstudiantes([{
        id_estudiante: "",
        nombre_estudiante: "",
        apellido_estudiante: "",
        correo_estudiante: "",
        puntaje: "",
        contra_estudiante: ""
      },])
      setVerRank(false)
      setVerMedallas(false)
      navigate("/gestionar/estudiantes")
    }
    const handleMedallas = async (e)=>{
      handleHome()
      setLoading(true)
      navigate("/medallas")
      try {
      e.preventDefault()
      const res = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/rank/estudiantes')
      for(let i=0; res.data.length > i; i++ ){
        setRankEstudiantes(rankEstudiantes => [...rankEstudiantes, res.data[i]] )
      }
      navigate("medallas")
      setVerRank(false)
      setVerMedallas(true)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
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
          disabled={loading===true}
          onClick={handleVerRanking}>{loading ? "Obteniendo...": "Ver Ranking"}</Nav.Link>
              <Nav.Link onClick={handleDocente}>Docente</Nav.Link>
              <Nav.Link onClick={handleCursos}>Cursos</Nav.Link>
              <Nav.Link onClick={handleEstudiantes}>Estudiantes</Nav.Link>
              <Nav.Link onClick={handleMedallas}>Medallass</Nav.Link>

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
        <Medallas rankEstudiantes={rankEstudiantes}  verMedallas={verMedallas} setVerMedallas={setVerMedallas}/>
<LoadingUX show ={loading} setLoading={setLoading}></LoadingUX>
       </>
    )
}