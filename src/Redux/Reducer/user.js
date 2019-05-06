const initialState = {}

export const actionTypes = {

       ADD_USER: 'user->ADD'
};

export default ( state = initialState, action )=>{

       switch(action.type){

              case actionTypes.ADD_USER:

                     return [...state, action.user]

              default:
                     return state;
       }
};