import { No_loguin } from "./No_loguin"
import '../estilos/medallas.css'
import { Button } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { LoadingUX } from "./LoadingUX"
import { useState } from "react"


export function Medallas({Logueado, permisoAdmin, verMedallas, rankEstudiantes, setVerMedallas}) {
  const [loading, setLoading]= useState(false)
  const [invalidar, setInvalidar]= useState(false)
    const navigate = useNavigate()
    const handleRepartirMedallas = async (e)=>{
      setLoading(true)
      
        try {
            const idRegistro = crypto.randomUUID()
            const res = await fetch('https://proyecto-backend-william-david-morales.onrender.com/insignias/estudiante',{
                method:'POST',
                body: JSON.stringify({
                    id_registro:idRegistro,
                    id_insignia: "123",
                    id_estudiante: rankEstudiantes[1].id_estudiante
                }),
                headers:{"Content-Type":"application/json"}
              })
              const res2 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/insignias/estudiante',{
                method:'POST',
                body: JSON.stringify({
                    id_registro: crypto.randomUUID(),
                    id_insignia: "1234",
                    id_estudiante: rankEstudiantes[2].id_estudiante
                }),
                headers:{"Content-Type":"application/json"}
              })  
              const res3 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/insignias/estudiante',{
                method:'POST',
                body: JSON.stringify({
                    id_registro: crypto.randomUUID(),
                    id_insignia: "12345",
                    id_estudiante: rankEstudiantes[3].id_estudiante
                }),
                headers:{"Content-Type":"application/json"}
              }) 
              for(let i = 1; 10 > i ; i++){
                const res4 = await fetch('https://proyecto-backend-william-david-morales.onrender.com/insignias/estudiante',{
                method:'POST',
                body: JSON.stringify({
                    id_registro: crypto.randomUUID(),
                    id_insignia: "123456",
                    id_estudiante: rankEstudiantes[i].id_estudiante
                }),
                headers:{"Content-Type":"application/json"}
              }) 
              }
              for(let i = 1; rankEstudiantes.length > i ; i++){
                const resUpdate = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/registro/estudiante/puntaje/${rankEstudiantes[i].id_estudiante}`,{
                    method:'PUT',
                    body: JSON.stringify({
                      puntaje:"0"
                    }),
                    headers:{"Content-Type":"application/json"}
                  })
            
              }
              
             
              setVerMedallas(false)
              navigate("/home")
              
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }


    const handleReiniciarTemporada = async (e)=>{
      setLoading(true)
        try {
            for(let i = 1; rankEstudiantes.length > i ; i++){
                const resUpdate = await fetch(`https://proyecto-backend-william-david-morales.onrender.com/registro/estudiante/puntaje/${rankEstudiantes[i].id_estudiante}`,{
                    method:'PUT',
                    body: JSON.stringify({
                      puntaje:"0"
                    }),
                    headers:{"Content-Type":"application/json"}
                  })
            
              }
              setVerMedallas(false)
              navigate("/home")
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
      }



 
    if(Logueado===false)return (
        <No_loguin />
      )

    if(verMedallas === true) return(
        <div className="container">
            <div className="estilodocente">
            <h1>Terminar temporada y repartir insignias</h1>
         <p>Repartir Insignias y terminar temporada.</p>
       
         <Button variant="outline-danger" onClick={handleRepartirMedallas}>A ello!</Button>
            </div>
            <div className="estilodocente">
            <h1>Reiniciar temporada</h1>
         <p>La temporada iniciara con todos los puntajes en cero pero no se entregarán medallas</p>
         <Button variant="outline-danger" onClick={handleReiniciarTemporada}>A ello!</Button>
            </div>
            <LoadingUX show ={loading} setLoading={setLoading}></LoadingUX>
        </div>
        
    )
    if(permisoAdmin=== false) return(
        <No_loguin />
    )
}