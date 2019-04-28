import React, {Component} from 'react';


import Header from './header.jsx';
import QuieneSomos from './quienesSomos.jsx'
import DondeEstamos from './dondeEstamos.jsx';


class Home extends Component{

       render(){
              return(
                     <div>
                            <Header /> 
                            <QuieneSomos />
                            <DondeEstamos />
                     </div>
              )
       }
};

export default Home;