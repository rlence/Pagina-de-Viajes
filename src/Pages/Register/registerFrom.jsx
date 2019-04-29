import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useName, usePassword, userRepetPassword } from '../../Hooks/Register';
import './registerFrom.scss';
import axios from 'axios';

function registerFrom() {

       const [username, setName] = useName('');
       const [email, setEmail] = useState('');
       const [password, setPassword] = usePassword('');
       const [repetPassword, setRepetPassword] = userRepetPassword('');

       function onSubmit(ev) 
       {
              ev.preventDefault();

              const body = {
                     username,
                     email,
                     password
              }

              axios.post('http://localhost:8080/user/register', body)
              .then( res => {
                     console.log(res.headers)
                     alert('registro exitoso')
                     
              })
              .catch( console.error )      
       }

       function comparacion() {

              if(password !== repetPassword){
                     alert('la contraseña no coinciden')
              }
       }

       useEffect( ()=> {

              console.log('intalando componente o actualizando')

              return console.log( 'desmontaje del componente' )

       });

       return (
              <div className="fondo" >
                     <div className="content">
                            <div className="title">
                                   <h1> Registro </h1>
                                   <Link to="/login"><a> ¿Ya estas registrado?  </a></Link>
                            </div>
                            <form className="formulario" onSubmit= { onSubmit } >
                                   <input type="text" placeholder="Usuario"
                                          onChange={(e) => setName(e.target.value)}
                                          value={ username }
                                   />

                                   <input type="email" placeholder="Email" 
                                          onChange= { e => setEmail(e.target.value) }
                                          value= { email }
                                   />
                                   <input type="password" placeholder="Contraseña"
                                          onChange={(e) => setPassword(e.target.value)}
                                          value={ password }
                                   />
                                   <input type="password" placeholder="Repite Cotraseña"
                                          onChange={(e) => setRepetPassword(e.target.value)}
                                          value={ repetPassword }
                                   />
                                   <div>
                                          <input type="checkbox" required></input>
                                          <label>Acepto los terminos y condiciones, asi como la politica de privacidad</label>
                                   </div>

                                   <input className="btn" type="submit" value="Enviar"
                                          onClick = { comparacion }
                                    />
                            </form>
                     </div>
              </div>
       )
};


export default registerFrom;