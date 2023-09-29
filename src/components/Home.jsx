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
   
        <h6> Bienvenido {user.nombre_estudiante} {user.apellido_estudiante}</h6>
        <h6>Correo Electronico {user.correo_estudiante}</h6>
        <h6> Puntaje Actual {user.puntaje_estudiante}</h6>
        
        <h6>Identificación {user.id_estudiante}</h6>
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
