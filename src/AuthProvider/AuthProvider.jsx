import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,GithubAuthProvider, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../FireBse/fireBase.config";

export const AuthContext=createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [spinner,setSpinner]=useState(false)
   const [user,setUser]=useState('')
   const [loading,setLoading]=useState(true)
    function signInBygoogle() {
        
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    function signingOut() {
        setLoading(true)
        return signOut(auth)
    }
    
    function signInBygitHub() {
        setLoading(true)
        return signInWithPopup(auth,gitHubprovider)
    }

    function createUser(email,password) {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function signingByEmailAndPassword(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    function updateProfiling(name,url) {
        
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: url
           
        })
        
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser);
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    console.log(user);
    let authInfo={signInBygoogle,signingOut,signInBygitHub,updateProfiling,createUser,signingByEmailAndPassword,user,loading,setSpinner,spinner}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;