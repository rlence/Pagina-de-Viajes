import React, { Component } from 'react';

import './index.scss';
import Header from './header.jsx';
import QuieneSomos from './quienesSomos.jsx'
import DondeEstamos from './dondeEstamos.jsx';
import Viajes from '../Viajes/viajes.jsx';


function Home (props) {



              return (
                     <div>
                            <Header />
                            <div className="zoneViajes">
                                   <div className="row1">
                                          <Viajes text="hola"
                                                 price="soy el precio €500"
                                                 nameViaje="MADRID - CARACAS"
                                          />
                                          <Viajes text="hola"
                                                 price="soy el precio €500"
                                                 nameViaje="MADRID - CARACAS"
                                          />
                                          <Viajes text="hola"
                                                 price="soy el precio €500"
                                                 nameViaje="MADRID - CARACAS"
                                          />
                                   </div>
                                   <div className="row2">
                                          <Viajes text="hola"
                                                 price="soy el precio €500"
                                                 nameViaje="MADRID - CARACAS"
                                          />
                                          <Viajes text="hola"
                                                 price="soy el precio €500"
                                                 nameViaje="MADRID - CARACAS"
                                          />
                                          <Viajes text="hola"
                                                 price="soy el precio €500"
                                                 nameViaje="MADRID - CARACAS"
                                          />
                                   </div>
                            </div>
                            <QuieneSomos />
                            <DondeEstamos />
                     </div>
              )
};

export default Home;