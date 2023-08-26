import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link , useNavigate } from "react-router-dom";

export function Barra_Docente({setLogueado}) {
    const handleLogout = (e)=>{
        setLogueado(false)
        navigate("/")
        }
        const navigate = useNavigate();

    return(
        <>
  <Navbar bg="dark" color="white" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand >Proyect</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link 
          onClick={() => navigate("/home")}>Home</Nav.Link>
        <Nav.Link 
          onClick={() => navigate("/crear/pregunta")}>Crear Pregunta</Nav.Link>
        <Nav.Link 
          onClick={() => navigate("/ver/ranking")}>Ver Ranking</Nav.Link>
          <NavDropdown title="Estudiantes" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => navigate("/registro/alumnos")}>Registrar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Eliminar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Revisar</NavDropdown.Item>
          </NavDropdown>
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
  
 </>
    )
    
}