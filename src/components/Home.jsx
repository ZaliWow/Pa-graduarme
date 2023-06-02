import Button from "react-bootstrap/Button"
import { No_loguin } from "./No_loguin"
export function Home({
  user,
  Logueado
}) {
  if(Logueado===false)return (
    <No_loguin />
  )
  const handleChange =(e) =>{
    e.preventDefault()
    
   
  }
  return (
    <div className="estiloranking">
        <h1>Bienvenido {user.nombre_estudiante} {user.apellido_estudiante}</h1>
        <h1>Tu correo es {user.correo_estudiante}</h1>
        <h1>Tu puntaje actual es {user.puntaje_estudiante}</h1>
        <h1>Tu id es {user.id_estudiante}</h1>
                
    </div>
  )
}
