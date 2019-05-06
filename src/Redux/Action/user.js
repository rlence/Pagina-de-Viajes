import { actionTypes } from '../Reducer/user'; 

export const userLogin = (user) =>{

       return {
              type: actionTypes.ADD_USER,
              user: {user}
       }
};