import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link , useNavigate } from "react-router-dom";

export function Barra_opciones() {
  const navigate = useNavigate();
    return(
       
        <Navbar bg="dark" variant="dark" >
          <Container >
            <Navbar.Brand >Proyecto de grado</Navbar.Brand>
            <Nav  >
              <Button
              style={{marginLeft:5,marginRight:5, marginTop:10, marginBottom:10}}
              variant='warning'
              onClick={() => navigate("/home")}
              >Home</Button>
              <Button
              style={{marginLeft:5,marginRight:5, marginTop:10, marginBottom:10}}
              variant='warning'
              onClick={() => navigate("/crear/pregunta")}
              >Crear Pregunta</Button>
              <Button
              style={{marginLeft:5,marginRight:5, marginTop:10, marginBottom:10}}
              variant='warning'
              onClick={()=> navigate("/registro/alumnos")}
              >Registrar Alumno</Button>
              <Button
              style={{marginLeft:5,marginRight:5, marginTop:10, marginBottom:10}}
              variant='warning'
              onClick={()=> navigate("/ver/ranking")}
              >Ver Ranking</Button>
              
            </Nav>
            <Navbar.Collapse 
            className="justify-content-end">
            <Button 
            variant="outline-warning"
            onClick={()=> navigate("/")}
            >Log out</Button>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        
       
        
       
    )
    
}