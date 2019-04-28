import React from 'react';
import { Link } from 'react-router-dom';
import './quienesSomos.scss';

function QuienesSomos() {

       return (
              <div className="fondoContenedor" id="quienesSomos" >
                     <div className="contenedor" >
                            <div className= "quienesSomos" >
                                   <h2>Quienes Somos</h2>
                                   <p>  En travels es una agencia de viaje online creada em 2009 por un equivo de viajeros
                                          entusiastas que deciden hacer su pasion por conocer el mundo un modo de vida.
                                          Desde nuestros inicios hemos diseñado mas de 500 viajes organizados a diferentes
                                          destinos en Europa, NorteAmerica y Asia. Nuestro objetivo es ahora es ir ampliando
                                          horizonstes poco a poco.
                                   </p>
                                   <Link className="btn-somos"><input type="submit" value="Descubrir" /></Link>
                            </div>
                     </div>
              </div>
       )

};

export default QuienesSomos;