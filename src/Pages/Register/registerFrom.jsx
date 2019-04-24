import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useName, usePassword, userRepetPassword } from '../../Hooks/Register';
import './registerFrom.scss';

function registerFrom() {

       const [name, setName] = useName('');
       const [password, setPassword] = usePassword('');
       const [repetPassword, setRepetPassword] = userRepetPassword('');

       function onSubmit(ev) 
       {
              ev.preventDefault();
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
                            <form className="formulario" onSubmit= {onSubmit} >
                                   <input type="text" placeholder="Usuario"
                                          onChange={(e) => setName(e.target.value)}
                                          value={name}
                                   />

                                   <input type="email" placeholder="Email" />
                                   <input type="password" placeholder="Contraseña"
                                          onChange={(e) => setPassword(e.target.value)}
                                          value={password}
                                   />
                                   <input type="password" placeholder="Repite Cotraseña"
                                          onChange={(e) => setRepetPassword(e.target.value)}
                                          value={repetPassword}
                                   />
                                   <div>
                                          <input type="checkbox"></input>
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