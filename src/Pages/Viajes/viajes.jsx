import React from 'react';
import './viajes.scss';

function Viajes(props) {

       const estilo = {
              backgroundImage: `url('/imagenes/${props.imagesName}')`, 
              backgroundRepeat: 'no-repeat', 
              backgroundSize:'cover', 
              backgroundPosition: 'center'
       }; 

       return (
              <div className="viaje">
                     <div className="infomracion" style={ estilo } >
                            <div className="texto">
                                   <p>{props.text}</p>
                            </div>
                            <div className="precio" >
                                   <p className= "textPrecio" >{props.price}</p>
                            </div>
                     </div>
                     <div className="nombreDeViaje">
                            <p>{props.nameViaje}</p>
                     </div>
              </div>
       )
};

export default Viajes;