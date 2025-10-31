import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/firebase.init";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [ loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }
    } ,[])





    const authInfo = {
        createUser,
        user,
        loading,
        signInUser
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
