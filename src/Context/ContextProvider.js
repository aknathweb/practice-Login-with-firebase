import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    ///////////// login, Logout, Signup with email///////////////
    const CreateNewUserFB = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserLoginFB = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UserLogOutFB = () => {
        setLoading(true);
        return signOut(auth)
    }
    ///////////// login, Logout, Signup with email///////////////
    ////////////Current User;one time state change///////////////
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
            setLoading(false);
        });
        return () => unsubscribe;
    })
    ////////////////Current User////////////////////////////////
    ////////////////////////update user/////////////////////////
    const UpdateUserProfileFB = (name, photoURL) => {
        // reload use for photoURL update
        window.location.reload();
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const UpdateUserEmailFB = (newEmail) => {
        setLoading(true);
        return updateEmail(auth.currentUser, newEmail)
    }

    const UpdateUserPasswordFB = (NewPassword) => {
        setLoading(true);
        return updatePassword(auth.currentUser, NewPassword)
    }
    const UpdateUserPasswordEmailSendFB = () => {
        setLoading(true);
        return sendPasswordResetEmail(auth, user.email)
    }
    ////////////////////////update user/////////////////////////
    /////////////////////// verification Email ////////////////
    const VerificationUserEmailFB = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }
    /////////////////////// verification Email ////////////////
    const AuthInfo = {
        loading
        , user
        , setUser
        , CreateNewUserFB
        , UserLoginFB
        , UserLogOutFB
        , UpdateUserProfileFB
        , UpdateUserEmailFB
        , VerificationUserEmailFB
        , UpdateUserPasswordFB
        , UpdateUserPasswordEmailSendFB
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;