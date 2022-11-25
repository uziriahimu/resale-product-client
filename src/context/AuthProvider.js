import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const createUser = (email, password) => {
    //     setLoading(true)
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    // const signIn = (email, password) => {
    //     setLoading(true)
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    // const logOut = () => {
    //     setLoading(true)
    //     return signOut(auth)
    // }

    // const updateUser = (userInfo) => {
    //     return updateProfile(auth.currentUser, userInfo)
    // }
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         setLoading(false)
    //     })
    //     return () => unsubscribe();
    // }, [])
    // createUser, signIn, logOut, setUser, user, loading, setLoading, updateUser
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;