import { createStore, combineReducers } from 'redux';

export default () => {
       //exportamos una funcion que ya tenga configurado el store
       //le pasamos parametros la funcion switch de reducer donde tenemos todos los casos
       return createStore( 
              //llamamos a combineReducers que le pasamos como clave valor lo que cada reducer va hacer
              combineReducers({
                     
              }), 
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
              );
};