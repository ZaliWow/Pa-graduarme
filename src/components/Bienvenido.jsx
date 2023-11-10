import {Info_inicio} from "./Info_inicio"
import { Navbar } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "../estilos/bienvenido.css"

export function Bienvenido({Logueado, setInfoInsignias, setInsignias}) {
    if(Logueado===true)return null;
    const navigate = useNavigate()
    const handleLoguin = (e)=>{
        navigate("/loguin")
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
    return(
        <>
        <Navbar expand="lg" bg="dark" variant="dark"> 
            <Container>
            <Navbar.Brand 
            style={{color:'white'}}>Bienvenido
            </Navbar.Brand>
            <Button 
             className="justify-content-end"
            variant="light"
            onClick={handleLoguin}
            >Entrar</Button>
          
            </Container>
        </Navbar>
        <Info_inicio />

         </>
    )
    
    
}