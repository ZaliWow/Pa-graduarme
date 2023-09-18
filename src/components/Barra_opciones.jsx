
import { Barra_Docente } from './Barra_Docente';
import { Barra_Estudiante } from './Barra_Estudiante';
import { Barra_Admin } from './Barra_Admin';
import  axios  from 'axios';
import { useState } from 'react';

export function Barra_opciones({
  setLogueado,
  Logueado,
  PermisoDocente,
  user,
  handleLogout,
  setUsuario,
  permisoAdmin,
  setPermisoAdmin,
  setInfoInsignias,
  setInsignias
}) {
//hook para guardar la lista de estudiantes

 

if(Logueado === false)return null;


if(PermisoDocente===true && permisoAdmin===false)return (
 
  <Barra_Docente setLogueado={setLogueado} HandleLogout={handleLogout}></Barra_Docente>

)
else if(PermisoDocente===false && permisoAdmin===false)return(
  <Barra_Estudiante setInfoInsignias={setInfoInsignias} setUsuario={setUsuario} setInsignias={setInsignias} setLogueado={setLogueado} user={user} HandleLogout={handleLogout}></Barra_Estudiante>
)
else if(permisoAdmin===true)return(
  <Barra_Admin setLogueado={setLogueado} HandleLogout={handleLogout} />
)
              
    
    
}

    
    
    