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
      <tbody>
        <tr>
          <td>1</td>
          <td>{rankEstudiantes[1].nombre_estudiante} </td>
          <td>{rankEstudiantes[1].id_estudiante}</td>
          <td>{rankEstudiantes[1].puntaje}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{rankEstudiantes[2].nombre_estudiante}</td>
          <td>{rankEstudiantes[2].id_estudiante}</td>
          <td>{rankEstudiantes[2].puntaje}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{rankEstudiantes[3].nombre_estudiante}</td>
          <td>{rankEstudiantes[3].id_estudiante}</td>
          <td>{rankEstudiantes[3].puntaje}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>{rankEstudiantes[4].nombre_estudiante}</td>
          <td>{rankEstudiantes[4].id_estudiante}</td>
          <td>{rankEstudiantes[4].puntaje}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>{rankEstudiantes[5].nombre_estudiante}</td>
          <td>{rankEstudiantes[5].id_estudiante}</td>
          <td>{rankEstudiantes[5].puntaje}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>{rankEstudiantes[6].nombre_estudiante}</td>
          <td>{rankEstudiantes[6].id_estudiante}</td>
          <td>{rankEstudiantes[6].puntaje}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>{rankEstudiantes[7].nombre_estudiante}</td>
          <td>{rankEstudiantes[7].id_estudiante}</td>
          <td>{rankEstudiantes[7].puntaje}</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    </div>
    )
}