import { createContext, useState} from "react";

export let userContext=createContext(0);

export default function UserContextProvider(props){
    const [user,setUser]=useState("")
    function changeUser(){
        setUser(localStorage.getItem("userName"));
        return user;
    }

    return <userContext.Provider value={{user, changeUser}}>
        {props.children}
    </userContext.Provider>
}