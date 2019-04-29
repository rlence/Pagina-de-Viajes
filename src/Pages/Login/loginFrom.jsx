import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './loginFrom.scss';

function LoginFrom(props) {

       const [ email, setEmail ] = useState('');
       const [ password, setPassword ] = useState('');

       function onSubmit(ev) 
       {
              ev.preventDefault();

              const body = {
                     email,
                     password
              }

              axios.post('http://localhost:8080/user/login', body)
              .then( res => {
                     console.log(res.headers)
                     localStorage.setItem('authorization', res.headers.authorization )
                     alert('haz iniciado seccion exitosamente')
              })
              .catch( console.error )
       }

       return (
              <div className="fondoLog" >
                     <div className="contentenido">

                            <div className="titulo">
                                   <h1> Login </h1>
                            </div>

                            <form className="formularioLog" onSubmit= { onSubmit }>
                                   <input type="email" placeholder="Email"
                                          onChange= { e => setEmail(e.target.value) }
                                          value= { email }
                                   />
                                   <input type="password" placeholder="Contraseña"
                                          onChange= { e => setPassword(e.target.value) }
                                          value= { password }
                                   />
                                   <input className="btn" type="submit" value="Enviar"/>
                            </form>

                            <div className="textLow">
                                   <Link to="/login"><a> ¿No Recuerdas tu Contraseña?  </a></Link>
                            </div>
                     </div>
              </div>
       )
};


export default LoginFrom;