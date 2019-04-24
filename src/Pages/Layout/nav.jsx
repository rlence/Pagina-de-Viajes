import React from 'react';

import IconsNav from './iconNav.jsx';
import './nav.scss'
function Nav (props){
       //aqui va el codigo del evento
       // window.onscroll = function() {myFunction()};

       // function myFunction() {
       //        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       //               document.getElementsByClassName("myP").className = "test";
       //        } else {
       //               document.getElementById("myP").className = "";
       //        }
       // }

       return(
              <nav className="navegacion ">
                     <div className="logo">
                            <img src="./imagenes/logo.png"></img>
                     </div>
                     <div className="links">
                            <a href="http://google.com"> Destinos </a>
                            <a href="http://ricardolence.com"> Quienes Somos </a>
                            <a href=""> Donde Estamos </a>
                     </div>
                     <div className="iconsNav">
                            <IconsNav />
                     </div>
              </nav>
       )

};

export default Nav;