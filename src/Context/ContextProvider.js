import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState('');

    ///////////// login, Logout, Signup with email///////////////
    const CreateNewUserFB = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserLoginFB = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UserLogOutFB = () => {
        return signOut(auth)
    }
    ///////////// login, Logout, Signup with email///////////////
    ////////////////////////update user/////////////////////////
    const UpdateUserProfileFB = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const UpdateUserEmailFB = (newEmail) => {
        return updateEmail(auth.currentUser, newEmail)
    }
    ////////////////////////update user/////////////////////////
    /////////////////////// verification Email ////////////////
    const VerificationUserEmailFB = () => {
        return sendEmailVerification(auth.currentUser)
    }
    /////////////////////// verification Email ////////////////
    const AuthInfo = {
        user
        , setUser
        , CreateNewUserFB
        , UserLoginFB
        , UserLogOutFB
        , UpdateUserProfileFB
        , UpdateUserEmailFB
        , VerificationUserEmailFB
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;