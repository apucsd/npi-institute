import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
    googleSignIn,
    facebookSignIn,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
