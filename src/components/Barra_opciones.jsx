import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link , useNavigate } from "react-router-dom";
import { Barra_Docente } from './Barra_Docente';
import { Barra_Estudiante } from './Barra_Estudiante';

export function Barra_opciones({
  setLogueado,
  Logueado,
  PermisoDocente
}) {
if(Logueado === false)return null;


if(PermisoDocente===true)return (
 
  <Barra_Docente setLogueado={setLogueado}></Barra_Docente>

)
else if(PermisoDocente===false)return(
  <Barra_Estudiante setLogueado={setLogueado}></Barra_Estudiante>
)
              
    
    
}

    
    
    