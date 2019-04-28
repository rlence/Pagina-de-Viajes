import React, {Component} from 'react';


import Header from './header.jsx';
import QuieneSomos from './quienesSomos.jsx'
import DondeEstamos from './dondeEstamos.jsx';
import Viajes from '../Viajes/viajes.jsx';


class Home extends Component{

       render(){
              return(
                     <div>
                            <Header /> 
                            <Viajes>
                                   viajes
                            </Viajes>
                            <QuieneSomos />
                            <DondeEstamos />
                     </div>
              )
       }
};

export default Home;