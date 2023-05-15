import { Navbar } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


export function Bienvenido() {
    const navigate = useNavigate()
    return(
        <>
        <Navbar bg="dark"> 
            <Container>
            <Navbar.Brand 
            style={{color:'white'}}>Bienvenido al proyecto de grado de David Morales
            </Navbar.Brand>
            
            <Navbar.Collapse 
            className="justify-content-end">
            <Button 
            variant="outline-warning"
            onClick={()=> navigate("/loguin")}
            >Log in</Button>
          </Navbar.Collapse>
            </Container>
        </Navbar>
        

         </>
    )
    
    
}