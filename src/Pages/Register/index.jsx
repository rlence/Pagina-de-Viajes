import React, {Component} from 'react';

import Nav from '../Layout/nav.jsx';
import RegisterFrom from './registerFrom.jsx';


class Register extends Component {

       render(){
              return(
                     <div>
                            <Nav />
                            <RegisterFrom />
                     </div>
              )
       }

}

export default Register;