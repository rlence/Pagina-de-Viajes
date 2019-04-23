import React, {Component} from 'react';

import Nav from '../Layout/nav.jsx';
import Header from './header.jsx';

class Home extends Component{

       render(){
              return(
                     <div>
                            <Nav />       
                            <Header />
                     </div>
                            
                     

              )
       }
};

export default Home;