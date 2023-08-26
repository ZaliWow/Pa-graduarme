import { No_loguin } from "./No_loguin"
export function Hacer_Examen({Logueado}){
    if(Logueado===false)return(
        <No_loguin>aqui sera el matadero</No_loguin>
    )
    
    if(Logueado===true)return(
        <h1>aqui sera el matadero</h1>
    )
}