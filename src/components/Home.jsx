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
      <div className="estiloinfo">
      <div className="estilodocentedos">
   
        <h3> Bienvenido {user.nombre_estudiante} {user.apellido_estudiante}</h3>
        <h3>Correo Electronico {user.correo_estudiante}</h3>
        <h3> Puntaje Actual {user.puntaje_estudiante}</h3>
        
        <h3>Identificación {user.id_estudiante}</h3>
      </div>
      <div className="estilodocentedos">
        Recuerda participar en el ranking para ganar medallas y llenar tu palmarés, las medallas que puedes conseguir son.
    <div className="container">
      <div className="estilopalmares">    
      <Avatar alt="" src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/8596c9bc-20ca-45a2-b760-e01dab3c716e/DreamShaper_v5_medalla_top_1_0.jpg" />
      </div>
      <div className="estilopalmares">
      <Avatar src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/fea30e7e-dd6c-4c1c-b63f-e7bbf101ffc5/DreamShaper_v5_medalla_de_bronce_plana_0.jpg"></Avatar>
      </div>
      <div className="estilopalmares">
      <Avatar src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/8596c9bc-20ca-45a2-b760-e01dab3c716e/DreamShaper_v5_medalla_top_1_1.jpg"></Avatar>

      </div>
      <div className="estilopalmares">
      <Avatar src="https://cdn.leonardo.ai/users/ef661afa-21d9-43d3-82b4-dec9233cc4a9/generations/3e09f010-b502-4141-b00e-04a2ef8bbf85/DreamShaper_v5_medalla_de_plata_1.jpg"></Avatar>

      </div>
    </div>
      </div>
      </div>
        <div className="estilopalmares">
          <h6>¡Tu palmarés!</h6>
         <div >
        {infoInsignias.slice(1).map((element, index )=>( 
         <div className="container">
              
                <div className="estilodocentetres" 
                controls
                key={index}>
                
                <Avatar alt="" src={element.foto_insignia}  />
                </div>
                 
                 </div>
                
                          
                  ))}
                  </div>
        
        </div>
                
    </div>
  )
}
