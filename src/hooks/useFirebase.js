import {
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";
firebaseInitialize()


//Provider

const googleprovider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //google
  function signInWithGoogle() {
    return signInWithPopup(auth, googleprovider)
 
  };
  //github
  function signInWithGitHub() {
   
      return signInWithPopup(auth, gitHubProvider);

  };
  //Facebook
  function signInWithFacebook() {
    return signInWithPopup(auth, facebookProvider);

    
  };

  //Email
  function signInWithEmail(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)

      .then(result => {
        setUser(result.user);
      }).catch(err => {
        setError(err.message)
      })
  };

  //getEmail
  function getEmail(e) {
    setEmail(e?.target?.value)
  };

  //getPassword
  function getPassword(e) {
    setPassword(e?.target?.value)
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signInUser) => {
      if (signInUser) {
        setUser(signInUser);
      }
    });
    return () => unsubscribe;
  }, []);

  // sign out
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // sign up
  function signUp(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("user has been created")
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    signInWithEmail,
    signInWithFacebook,
    signInWithGitHub,
    signInWithGoogle,
    setError,
    user,
    error,
    setUser,
    signUp,
    getEmail,
    getPassword,
    logOut,
  };
};

export default useFirebase;