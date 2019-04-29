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
                                          <Viajes text="save €30 pay only"
                                                 price="€500"
                                                 nameViaje="Madrid"
                                                 imagesName="madrid.jpg"
                                          />
                                          <Viajes text="save €50 pay only"
                                                 price="€700"
                                                 nameViaje="Buenos Aires"
                                                 imagesName="buenosAires.jpg"
                                          />
                                          <Viajes text="save €15 pay only"
                                                 price="€900"
                                                 nameViaje="Ciudad de Mexico"
                                                 imagesName="ciudadMexico.jpg"
                                          />
                                   </div>
                                   <div className="row2">
                                          <Viajes text="save €110 pay only"
                                                 price="€750"
                                                 nameViaje="New York"
                                                 imagesName="newYork.jpg"
                                          />
                                          <Viajes text="save €10 pay only"
                                                 price="€400"
                                                 nameViaje="Tokyo"
                                                 imagesName="tokyo.jpg"
                                          />
                                          <Viajes text="save €25 pay only"
                                                 price="€650"
                                                 nameViaje="Beijing"
                                                 imagesName="beijing.jpg"
                                          />
                                   </div>
                            </div>
                            <QuieneSomos />
                            <DondeEstamos />
                     </div>
              )
};

export default Home;