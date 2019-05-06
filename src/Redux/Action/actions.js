import { actionTypes } from '../Reducer/reducer'; 

export const userLogin = (user) =>{

       return {
              type: actionTypes.ADD_USER,
              user:user
       }
};