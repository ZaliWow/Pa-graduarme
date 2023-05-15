import Alert from 'react-bootstrap/Alert';
import  "../estilos/estiloinfoinicio.css";
export function Info_inicio() {
    return(
        <div className='estiloinfoinicio'>
         <Alert variant="warning" >
         <Alert.Heading>Bienvenido</Alert.Heading>
         <p>
           Este proyecto está siendo realizado por el estudiante William David Morales Pineda 
           con el objetivo de contribuir a la educación secundaria y ayudar a los profesor a evaluar 
           a los estudiantes de una manera más comoda para ellos y menos estresante para los estudiantes,
           haciendo uso de la gamificación como estrategia principal para el cumplimiento de dichos objetivos 
         </p>
         <hr />
         <p className="mb-0">
           Web desarrollada en React+Vite estilizada por React+Bootstrap, y utilizando una base de datos postgresql
           y nodejs con express como backend.
         </p>
       </Alert>
       </div>
    )
    
}