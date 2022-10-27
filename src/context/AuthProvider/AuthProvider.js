import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        // setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
      
    };
    
    const createUserWithEmail = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user inside state change', currentUser);
            if (currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    
    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const info = {
        loading,
        setLoading,
        user,
        emailVerification,
        signIn,
        logOut,
        createUserWithEmail,
        googleSignIn,
        updateUserProfile
    };

  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
