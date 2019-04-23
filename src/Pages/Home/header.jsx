import React from 'react';

import './header.scss';
function Header(props) {

       return (

              <header className="cabecera">
                     <div className="titulos">
                            <h1>VIAJA!!</h1>
                            <h3>Descubre lugares maravillosos</h3>
                     </div>
                     <div className="btn-principal">
                            <input type="button" value="Ver Destinos"></input>
                     </div>

              </header>
       )
};


export default Header;