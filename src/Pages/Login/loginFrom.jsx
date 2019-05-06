import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './loginFrom.scss';
import { connect } from 'react-redux';
import { userLogin } from '../../Redux/Action/actions';

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
                     console.log(res)
                     //localStorage.setItem('authorization', res.headers.authorization )
                     const user = {
                            ...res.data,
                            token: res.headers.authorization
                     }
                     props.userLogin(user);
                    
              })
              .catch( console.error )

              setEmail("");
              setPassword("");
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

const mapStateToProps = ( state, propos) => {

       return {
           user: state.user
       }
};

const mapDispatchToProps = (dispatch, props) => {

       return {
     
         userLogin: (user) => dispatch( userLogin( user)),
       }
}

export default connect( mapStateToProps, mapDispatchToProps)(LoginFrom);