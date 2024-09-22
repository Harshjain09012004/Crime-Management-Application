import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const usercontext = createContext({});

export function ContextProvider({children}){
    const [user, setuser] = useState(null);
    const [ready, setready] = useState(false);
    const [dp,setdp] = useState('');
    const [count, setcount] = useState(0);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(()=>{
      axios.get('/profile').then((user)=>{
        console.log("I am user Context");
        setuser(user.data.name); 
        setdp(user.data.profileimage); 
        setisAdmin(user.data.role == 'admin'); 
        setready(true);
        console.log("I am user Context");
      })
    },[])

    return(
        <usercontext.Provider value={{user,setuser,ready,setready,dp,setdp,count,setcount,isAdmin,setisAdmin}}>
          {children} 
        </usercontext.Provider>
    )
}