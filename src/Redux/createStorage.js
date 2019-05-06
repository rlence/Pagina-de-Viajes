import { createStore } from 'redux';
import reducer from './Reducer/reducer';


export default () => {
       //exportamos una funcion que ya tenga configurado el store
       //le pasamos parametros la funcion switch de reducer donde tenemos todos los casos
       return createStore(
              reducer, 
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
       );
};