import React from 'react';
import { Link } from 'react-router-dom';



function registerFrom () {

       return (

              <div className= "content">
                     <div className= "title">
                            <h1> Registro </h1>
                            <Link to="/login"><h3> ¿Ya estas registrado?  </h3></Link>
                     </div>
                     <form className= "formulario">
                            <input type= "text" placeholder= "Usuario"></input>
                            <input type= "email" placeholder= "Email"></input>
                            <input type= "password" placeholder= "Contraseña"></input>
                            <input type= "password" placeholder= "Repite Cotraseña"></input>
                            
                            <input type = "checkbox"></input>
                            <label>Acepto los terminos y condiciones, asi como la politica de privacidad</label>
                            
                            <input type= "submit" value= "Enviar"></input>
                     </form>

              </div>
       )
};


export default registerFrom;