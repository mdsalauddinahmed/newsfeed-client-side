import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import { getAuth } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

const auth = getAuth(app)
const AuthProvider = ({children}) => {
   
    const user = null;
    const authInfo ={
        user
    }

    return (
         <AuthContext.Provider value={authInfo}>
           {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;