import React, {Component} from 'react';

import Nav from '../Layout/nav.jsx';
import RegisterFrom from './registerFrom.jsx';
import Footer from '../Layout/footer.jsx';


class Register extends Component {

       render(){
              return(
                     <div>
                            <Nav />
                            <RegisterFrom />
                            <Footer />
                     </div>
              )
       }

}

export default Register;