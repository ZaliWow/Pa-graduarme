import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link , useNavigate } from "react-router-dom";

export function Barra_opciones() {
  const navigate = useNavigate();
    return(
     
           <Navbar bg="secondary" expand="lg">
 
          <Container fluid>
<Navbar.Brand>Proyecto de grado</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse>
  <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
    <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
    <Nav.Link onClick={() => navigate("/crear/pregunta")}>Crear Pregunta</Nav.Link>
    <Nav.Link onClick={() => navigate("/ver/ranking")}>Ver Ranking</Nav.Link>
    <NavDropdown title="Estudiantes" >
              <NavDropdown.Item onClick={() => navigate("/registro/alumnos")}>
                Registrar Estudiante</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/revisar/alumnos")}>
                Revisar Estudiante</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/eliminar/alumnos")} >
                Eliminar Estudiante</NavDropdown.Item>
                
   </NavDropdown>
   
  </Nav>
  </Navbar.Collapse>
<Form className="d-flex">
<Button variant="outline-dark">Log out</Button>
</Form>
</Container>
</Navbar>
           
      
        
       
        
       
    )
    
}