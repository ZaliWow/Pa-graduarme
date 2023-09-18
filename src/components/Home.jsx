import Button from "react-bootstrap/Button"
import { No_loguin } from "./No_loguin"
import '../estilos/medallas.css'
export function Home({
  user,
  Logueado,
  insignias,
  infoInsignias
}) {
  if(Logueado===false)return (
    <No_loguin />
  )
  const handleChange =(e) =>{
    e.preventDefault()
    
   
  }
  return (
    <div className="container">
      <div className="estilodocentedos">
        <h4>Bienvenido </h4>
        <h6>{user.nombre_estudiante} {user.apellido_estudiante}</h6>
        <h4>Tu correo es </h4>
        <h6>{user.correo_estudiante}</h6>
        <h4>Tu puntaje actual es </h4>
        <h6>{user.puntaje_estudiante}</h6>
        <h4>Tu id es </h4>
        <h6>{user.id_estudiante}</h6>
      </div>
        <div >
         <div >
        {infoInsignias.slice(1).map((element, index )=>( 
         <div className="container">

              <div
                className="estilodocentedos"
                controls
                >
                    <h6
                 controls
                 
                  >Insignia :
                  </h6>
                  <p>{element.descripcion}</p>  
                    
                  <p>{element.forma_ganar}</p>
                </div> 
                <div className="estilodocentedos">
                <img src={element.foto_insignia} alt="" />
                </div>
                 
                 </div>
                
                          
                  ))}
                  </div>
        
        </div>
                
    </div>
  )
}
