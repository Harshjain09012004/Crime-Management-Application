import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const usercontext = createContext({});

export function ContextProvider({children}){
    const [user, setuser] = useState(null)
    const [ready, setready] = useState(false)
    const [dp,setdp] = useState('');
    const [count, setcount] = useState(0)

    useEffect(()=>{
      axios.get('/profile').then((user)=>{
        setuser(user.data.name);
        setdp(user.data.photo); 
        setready(true);
      })
    },[])

    return(
        <usercontext.Provider value={{user,setuser,ready,setready,dp,setdp,count,setcount}}>
          {children} 
        </usercontext.Provider>
    )
}