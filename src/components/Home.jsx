import Button from "react-bootstrap/Button"
import { No_loguin } from "./No_loguin"
import '../estilos/medallas.css'
import { Avatar } from "@mui/material"
export function Home({
  user,
  Logueado,
  insignias,
  infoInsignias,
  permisoDocente,
  permisoAdmin
}) {
  if(Logueado===false)return (
    <No_loguin />
  )
  const handleChange =(e) =>{
    e.preventDefault()
     
  }
  if(Logueado===true && permisoAdmin===false && permisoDocente===true) return(
    <div>
    <h1 className="container">Bienvenido profesor, recuerda que esta aplicación está diseñada para darte un support a tí y a tus estudiantes.</h1>
    </div>
  )
  if(Logueado ===true && permisoAdmin===true && permisoDocente===false)return(
    <div>
      <h1>Bienvenido señor administrador</h1>
    </div>
  )
  if(Logueado===true && permisoAdmin===false && permisoDocente===false)return (
    <div className="container">
      <div className="estilodocentedos">
   
        <h3> Bienvenido {user.nombre_estudiante} {user.apellido_estudiante}</h3>
        <h3>Correo Electronico {user.correo_estudiante}</h3>
        <h3> Puntaje Actual {user.puntaje_estudiante}</h3>
        
        <h3>Identificación {user.id_estudiante}</h3>
      </div>
        <div >
         <div >
        {infoInsignias.slice(1).map((element, index )=>( 
         <div className="container">

              <div
                className="estilodocentedos"
            
                >
                    <h6
              
                 
                  >Insignia :
                  </h6>
                  <p>{element.descripcion}</p>  
                    
                  <p>{element.forma_ganar}</p>
                </div> 
                <div className="estilodocentetres">
                <Avatar alt="" src={element.foto_insignia}  />
                </div>
                 
                 </div>
                
                          
                  ))}
                  </div>
        
        </div>
                
    </div>
  )
}
