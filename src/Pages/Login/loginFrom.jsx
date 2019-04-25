import React from 'react';
import { Link } from 'react-router-dom';

import './loginFrom.scss';

function LoginFrom() {

       function onSubmit(ev) 
       {
              ev.preventDefault();
       }

       return (
              <div className="fondoLog" >
                     <div className="contentenido">

                            <div className="titulo">
                                   <h1> Login </h1>
                            </div>

                            <form className="formularioLog" onSubmit= { onSubmit }>
                                   <input type="email" placeholder="Email" />
                                   <input type="password" placeholder="Contraseña"/>
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