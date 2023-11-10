import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link , useNavigate } from "react-router-dom";
import { useState } from 'react';
import  axios  from 'axios';
import { Ver_ranking } from './Ver_ranking';
import { Advertencia_Estudiantes } from './Advertencia_Estudiantes';



export function Barra_Estudiante({setLogueado, user, setInfoInsignias, setInsignias, setPuntajeEstudiante}) {


const [mostrarAdvertencia,setMostrarAdvertencia]= useState(false)
const [verExamen, setVerExamen] = useState(false)
const [loading, setLoading]= useState(false)
    const handleLogout = (e)=>{
        setLogueado(false)
        navigate("/")
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
          setLoading(true)
          e.preventDefault()
          try {
          const res = await axios.get('https://proyecto-backend-william-david-morales.onrender.com/rank/estudiantes')
          for(let i=0; res.data.length > i; i++ )
          setRankEstudiantes(rankEstudiantes => [...rankEstudiantes, res.data[i]])
          navigate("/ver/ranking")
          
          setVerExamen(false)
          setVerRank(true)
          } catch (error) {
            console.log(error)
          }
          setLoading(false)
          
        }

        const  handleTomarPrueba = (e) =>{
          navigate("/hacer/examen")
          setVerRank(false)
          setMostrarAdvertencia(false)
          setVerExamen(false)
          setRankEstudiantes([ {
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
        }
        const  handleHome = async (e) =>{
          const res = await axios.get(`https://proyecto-backend-william-david-morales.onrender.com/registro/estudiantes/${user.id_estudiante}`)
          setPuntajeEstudiante(res.data[0].puntaje)
          navigate("/home")
          setVerRank(false)
          setVerExamen(false)
          setRankEstudiantes([ {
            id_estudiante: "",
            nombre_estudiante: "",
            apellido_estudiante: "",
            correo_estudiante: "",
            puntaje: "",
            contra_estudiante: ""
          },])
          
        }
        const  handleAdvertencia = (e) =>{
          setMostrarAdvertencia(true)
         
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
                onClick={handleHome}>Sobre mi</Nav.Link>
              <Nav.Link 
                onClick={handleRanking}>{loading ? "Loading...": "Ver Ranking"}</Nav.Link>
               <Nav.Link 
                onClick={handleAdvertencia}>Tomar prueba</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Button
                onClick={handleLogout}
                  variant="outline-light"
                  type='submit'
                  >Cerrar sesión</Button>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        


        <Ver_ranking rankEstudiantes={rankEstudiantes}  verRank={verRank}/>
        <Advertencia_Estudiantes 
        user={user}
         handleTomarPrueba={handleTomarPrueba} 
         show={mostrarAdvertencia} 
         setMostrarAdvertencia={setMostrarAdvertencia} 
         setVerRank={setVerRank} 
         setVerExamen={setVerExamen} 
         verExamen={verExamen}
         setRankEstudiantes={setRankEstudiantes}
         />
       </>
    )
    
}