import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import Login from './Pages/Login/index';

import Nav from './Pages/Layout/nav.jsx';
import Footer from './Pages/Layout/footer.jsx';
import Error404 from './Pages/Erro404';

function Layout(props) {
       return (
              <div>
                     <Nav />
                     {props.children}
                     <Footer />
              </div>

       );
}

function AppRouter() {

       return (

              <BrowserRouter>
                     <Layout>
                            <Switch>
                                   <Route path="/" component={Home} exact />
                                   <Route path="/register" component={Register} exact />
                                   <Route path="/login" component={Login} exact />
                                   <Route path="*" component={ Error404 } />
                            </Switch>
                     </Layout>
              </BrowserRouter>
       )
};

export default AppRouter;