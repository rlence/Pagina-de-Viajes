import {useState} from 'react';


export function useName (initialEstate)
{
       const [ name, setName ] = useState(initialEstate);

       if(name.length > 10 ){

              setName(name.slice(0,10));
       }

       return [ name, setName ]
}

export function usePassword (initialEstate) 
{
       const [ password, setPassword ] = useState(initialEstate);

       if(password.length > 8){
       
              setPassword(password.slice(0,8));
       }

       return [ password, setPassword ]
}

export function userRepetPassword (initialEstate) 
{
       const [ repetPassword, setRepetPassword ] = useState(initialEstate);

       if(repetPassword.length > 8){

              setRepetPassword(repetPassword.slice(0,8));
       }
              return [ repetPassword, setRepetPassword ]
}

