import React from 'react';
import './nav.scss'
function Nav (props){
       return(
              <nav className="navegacion">
                     <div className="logo">
                            <img src="./imagenes/logo.png"></img>
                     </div>
                     <div className="links">
                            <a href="http://google.com"> Destinos </a>
                            <a href="http://ricardolence.com"> Quienes Somos </a>
                            <a href=""> Donde Estamos </a>
                     </div>
                     <div className="iconsNav">
                            <a href=""> twiiter </a>
                            <a href=""> facebook </a>
                            <a href=""> instagram </a>
                            <a href=""> whatssap </a>
                            <a href=""> linkedin </a>
                            <a href=""> youtube </a>
                     </div>
              </nav>
       )

};

export default Nav;