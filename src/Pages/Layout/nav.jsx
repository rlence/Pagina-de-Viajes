import React from 'react';
import {NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';
import IconsNav from './iconNav.jsx';
import './nav.scss'

function Nav (props){

       const selectorClass = React.createRef;
       
       //window.onscroll = function() {scroll()};
       // function scroll () {
       //        let altura = selectorClass('nav').offsetTop;
       //               alert(altura)

       //        if(window.scrollTop > altura){
       //               selectorClass('navegacion').add('scrollNav')
       //        }else{
       //               selectorClass('navegacion').addClass('scrollNav')
       //        }
       // }

       return(
              <nav className="navegacion" ref= { selectorClass } onScroll= { window.scroll }>
                     <div className="logo">
                            <img src="./imagenes/logo.png"></img>
                     </div>
                     <div className="links">
                            <NavLink activeClassName= "active" to= "/"> Destinos </NavLink>
                            <NavLink activeClassName= "is-active" to= "#quienesSomos"> Quienes Somos </NavLink>
                            <NavLink activeClassName= "is-active" to= "#dondeEstamos"> Donde Estamos </NavLink>
                            <NavLink activeClassName= "is-active" to= "/register"> Register </NavLink>
                            <NavLink activeClassName= "active" to= "/login"> Login </NavLink>
                     </div>
                     <div className="iconsNav">
                            <IconsNav />
                     </div>
              </nav>
       )
};

export default Nav;