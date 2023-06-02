import {Info_inicio} from "./Info_inicio"
import { Navbar } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../estilos/bienvenido.css"

export function Bienvenido({Logueado}) {
    if(Logueado===true)return null;
    const navigate = useNavigate()
    return(
        <>
        <Navbar expand="lg" bg="dark" variant="dark"> 
            <Container>
            <Navbar.Brand 
            style={{color:'white'}}>Bienvenido
            </Navbar.Brand>
            <Button 
             className="justify-content-end"
            variant="outline-secondary"
            onClick={()=> navigate("/loguin")}
            >Log in</Button>
          
            </Container>
        </Navbar>
        <Info_inicio />

         </>
    )
    
    
}