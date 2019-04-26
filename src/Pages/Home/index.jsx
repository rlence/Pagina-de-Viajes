import React, {Component} from 'react';


import Header from './header.jsx';
import QuieneSomos from './quienesSomos.jsx'


class Home extends Component{

       render(){
              return(
                     <div>
                            <Header /> 
                            <QuieneSomos />
                     </div>
              )
       }
};

export default Home;