import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

 

const auth = getAuth(app)
const AuthProvider = ({children}) => {
   
    const [user,setUser] =useState(null);
    const [loading,setLoading]=useState(true)

  const CreateUser =(email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
  }
   
  const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

const logOut =()=>{
  setLoading(true)
  return  signOut(auth)
}
   
useEffect(()=>{
 const unsubscribe=  onAuthStateChanged(auth,loggedUser=>{
    console.log("user logged in observer",loggedUser)
    setUser(loggedUser)
    setLoading(false)
   })
   return ()=>{
      unsubscribe()
   }
},[])
  

    const authInfo ={
        user,
        loading,
        CreateUser,
        signIn,
        logOut
         
    }

    return (
         <AuthContext.Provider value={authInfo}>
           {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;