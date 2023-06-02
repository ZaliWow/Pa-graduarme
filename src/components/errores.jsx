import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
export function Errores({setError, errors}) {
    if(errors===false)return null;
    if (errors===true) {
        return (
          <Alert variant="danger" onClose={() => setError(false)} dismissible>
            <Alert.Heading>oh no! ha ocurrido un error!</Alert.Heading>
            <p>
              El correo o la contraseña es incorrecto, por favor verifique su correo y su contraseña
              si el problema persiste por favor comunicarse con la Administracion 
            </p>
          </Alert>
        );
      }
      
    }
