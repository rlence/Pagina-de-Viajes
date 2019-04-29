import React from 'react';
import {NavLink} from 'react-router-dom';
import IconsNav from './iconNav.jsx';
import './nav.scss'

function Nav (props){


       const selectorClass = React.createRef();
       
       window.onscroll = function() {scroll()};
       function scroll () {
              
              let altura = window.scrollY;
              
              if(selectorClass.current.clientHeight > altura){
                     
                     selectorClass.current.classList.remove('scrollNav')
              }else{
                     selectorClass.current.classList.add('scrollNav')
              }
       }

       return(
              <nav className="navegacion"  ref={ selectorClass } >
                     <div className="logo">
                            <img src="./imagenes/logo.png"></img>
                     </div>
                     <div className="links">
                            <NavLink activeClassName= "is-active" to= "/"> Destinos </NavLink>
                            <NavLink activeClassName= "is-active" to= "#quienesSomos"> Quienes Somos </NavLink>
                            <NavLink activeClassName= "is-active" to= "#dondeEstamos"> Donde Estamos </NavLink>
                            <NavLink activeClassName= "is-active" to= "/register"> Register </NavLink>
                            <NavLink activeClassName= "is-active" to= "/login"> Login </NavLink>
                     </div>
                     <div className="iconsNav">
                            <IconsNav />
                     </div>
              </nav>
       )
};

export default Nav;