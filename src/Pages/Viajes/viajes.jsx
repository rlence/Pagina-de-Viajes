import React from 'react';
import './viajes.scss';
function Viajes(props) {

       return (
              <div className="viaje">
                     <div className="infomracion">
                            <div className="texto">
                                   <p>{props.text}</p>
                            </div>
                            <div className="precio">
                                   <p>{props.price}</p>
                            </div>
                     </div>
                     <div className="nombreDeViaje">
                            <p>{props.nameViaje}</p>
                     </div>
              </div>
       )
};

export default Viajes;