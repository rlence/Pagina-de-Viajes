import React, {Component} from 'react';

import Nav from '../Layout/nav.jsx';
import Header from './header.jsx';
import Footer from '../Layout/footer.jsx';

class Home extends Component{

       render(){
              return(
                     <div>
                            <Nav />       
                            <Header />
                            <Footer />
                     </div>
                            
                     

              )
       }
};

export default Home;