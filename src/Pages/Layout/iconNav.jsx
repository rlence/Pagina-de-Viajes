import React from 'react';
import './iconNav.scss';

function IconNav(props) {

       return (
              <div>
                     <a href=""><i className= "icons fab fa-twitter-square twitter"></i></a>
                     <a href=""><i className= "icons fab fa-facebook facebook"></i></a>
                     <a href=""><i className= "icons fab fa-instagram instagram"></i></a>
                     <a href=""><i className= "icons fab fa-whatsapp-square whatsapp"></i></a>
                     <a href=""><i className= "icons fab fa-linkedin linkedin"></i></a>
                     <a href=""><i className= "icons fab fa-youtube youtube"></i></a>
              </div>
       )
};

export default IconNav;