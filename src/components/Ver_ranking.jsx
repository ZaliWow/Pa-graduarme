import Table from 'react-bootstrap/Table';
import '../estilos/estiloranking.css'
import { No_loguin } from "./No_loguin"
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

export function Ver_ranking({Logueado, rankEstudiantes, verRank}) {
 

  
  
  if(Logueado===false)return (
    <No_loguin />
  )
  if(verRank === true) return ( 
      
      <div>
        
        <div className='estiloranking'>
        <Table striped bordered hover>       
      <thead>
        <tr>
          <th>Top</th>
          <th>Nombre</th>
          <th>Identificacion</th>
          <th>Puntaje</th>
        </tr>
      </thead>
     
      {rankEstudiantes.slice(1).map((element, index )=>( 
      <tbody
      controls
      key={index}>
     
          <tr>
          <td>{index + 1}</td>
          <td>{element.nombre_estudiante} </td>
          <td>{element.id_estudiante}</td>
          <td>{element.puntaje}</td>
        </tr>
                
      </tbody>
      ))} 
      
    </Table>
    </div>
    </div>
    )
}