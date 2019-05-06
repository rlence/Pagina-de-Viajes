const initialState = {
       user:null
}

export const actionTypes = {

       ADD_USER: 'LOGIN'
};

export default ( state = initialState, action )=>{

       switch(action.type){

              case actionTypes.ADD_USER:

                     return {
                            ...state,
                            user: action.user
                     }

              default:
                     return state;
       }
};