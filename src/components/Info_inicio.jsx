import Alert from 'react-bootstrap/Alert';
import  "../estilos/estiloinfoinicio.css";


export function Info_inicio() {
    return(
      <>
        <div className='estiloinfoinicio'>
       
         <h1 className='sobre_nosotros_inicio'>Bienvenido</h1>
         
         
          <h5 className='sobre_nosotros_inicio'>
           Este proyecto está siendo realizado por el estudiante William David Morales Pineda 
           con el objetivo de contribuir a la educación secundaria y ayudar a los profesor a evaluar 
           a los estudiantes de una manera más comoda para ellos y menos estresante para los estudiantes,
           haciendo uso de la gamificación como estrategia principal para el cumplimiento de dichos objetivos 
         </h5>
         <hr />
         <h5 className='sobre_nosotros_inicio'>
           Web desarrollada en React+Vite estilizada por React+Bootstrap, y utilizando una base de datos postgresql
           y nodejs con express como backend.
         </h5>
         <br />
      <div className='redes_info_inicio'>
      <img src="https://avatars.githubusercontent.com/u/103011293?s=200&v=4" />
        <img src="https://destatic.blob.core.windows.net/images/nodejs-logo.png"/>
        <img src="https://pbs.twimg.com/profile_images/610586699798835201/OuezNT-e_400x400.png" />
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195562/express_js-161052138fa79136c0474521906b55e2.png"  />
      </div>
        <h1>Sobre nosotros</h1>
       <h5 className='sobre_nosotros_inicio'>Estudiante de ingenieria, décimo semestre aprendiz en desarrollo web backend y frontend
        con más experiencia en el frontend, por parte del backend la curva de aprendiza es mas pequeña, tiene conocimiento en
        Javascript, CSS, HTML5 y Python, hace uso de frameworks y librerias como Express y react 
        entiende y puede adaptarse a herramientas de estilizado como bootstrap, puede manejar consultas SQL
        incursionando en el aprendizaje de programas responsive
       </h5>
       <br />
       <h1>Redes Sociales</h1>
       <br />
      
       
       </div>
       
       <br />
       <div className='footer'>
        <br />
       <p>&copy; 2023 Your Company. All rights reserved.</p>
    
       </div>
       </>
    )
    
}