import React from 'react';
import './error.scss';

function Error404() {

       return (

              <div className="error">
                     <div className= "err404">
                            <h1>Oops!</h1>
                            <h3>Error 404 - Not Found</h3>
                            <p>Sorry, an error has occured. The resource you requested you has not been found!</p>
                     </div>
                     <div className= "buttons">
                            <button> Home </button>
                            <button> Contact </button>
                     </div>
              </div>
       )
};

export default Error404;