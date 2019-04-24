import React from 'react';
import { Link } from 'react-router-dom';
import {useName, usePassword, userRepetPassword} from '../../Hooks/Register';


function registerFrom () {

       const [ name, setName ] = useName('');
       const [ password, setPassword] = usePassword('');
       const [ repetPassword, setRepetPassword ] = userRepetPassword('');



       return (

              <div className= "content">
                     <div className= "title">
                            <h1> Registro </h1>
                            <Link to="/login"><h3> ¿Ya estas registrado?  </h3></Link>
                     </div>
                     <form className= "formulario">
                            <input type= "text" placeholder= "Usuario"
                                   onChange = { (e) => setName(e.target.value) }
                                   value = { name }
                            />
                            
                            <input type= "email" placeholder= "Email" />
                            <input type= "password" placeholder= "Contraseña" 
                                   onChange = { (e) => setPassword(e.target.value) }
                                   value= { password }
                            />
                            <input type= "password" placeholder= "Repite Cotraseña" 
                                   onChange = { (e) => setRepetPassword(e.target.value) }
                                   value = { repetPassword }
                            />
                            
                            <input type = "checkbox"></input>
                            <label>Acepto los terminos y condiciones, asi como la politica de privacidad</label>

                            <input type= "submit" value= "Enviar"></input>
                     </form>
              </div>
       )
};


export default registerFrom;