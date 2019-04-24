import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import Login from './Pages/Login/index';

function AppRouter (){
       
       return (

              <BrowserRouter>

                     <Switch>
                            <Route  path = "/" component = { Home } exact />
                            <Route path = "/register" component = { Register } exact />
                            <Route path = "/login" component = { Login } exact />
                     </Switch>
              
              
              </BrowserRouter>
       )
};

export default AppRouter;