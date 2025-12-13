import { useState } from "react"
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    function login(username){
      setUser({name:username});
    }
    function logout(){
      setUser(null);
    }
  return (
    <AuthContext.Provider value={{login,logout,user}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
