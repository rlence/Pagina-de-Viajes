import React, { Component } from 'react';

import './index.scss';
import Header from './header.jsx';
import QuieneSomos from './quienesSomos.jsx'
import DondeEstamos from './dondeEstamos.jsx';
import Viajes from '../Viajes/viajes.jsx';


function Home (props) {


       const selectorClass = React.createRef();
       
       window.onscroll = function() {scroll()};
       function scroll () {
              
              let altura = window.scrollY;
               
              console.log( document.getElementById('cabecera').clientHeight, altura )
              
              if(document.getElementById('cabecera').clientHeight > altura){
                     
                     selectorClass.current.classList.remove('scrollNav')
              }else{
                     selectorClass.current.classList.add('scrollNav')
              }
       }

              return (
                     <div>
                            <Header selector= { selectorClass } />
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