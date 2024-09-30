import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const usercontext = createContext({});

export function ContextProvider({children}){
    const [user, setuser] = useState(null);
    const [ready, setready] = useState(false);
    const [email, setemail] = useState('')
    const [dp,setdp] = useState('');
    const [count, setcount] = useState(0);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(()=>{
      axios.get('/profile').then(({data})=>{
        if(data){
          setuser(data.name); 
          setdp(data.profileimage); 
          setisAdmin(data.role == 'admin'); 
          axios.get('/getEmail').then(({data})=>{
            setemail(data.mail);
          })
        }
        setready(true);
      })
    },[])

    return(
        <usercontext.Provider value={{user,setuser,ready,setready,dp,setdp,count,setcount,isAdmin,setisAdmin,email,setemail}}>
          {children} 
        </usercontext.Provider>
    )
}