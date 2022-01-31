import {React, useState} from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjepQRClsAeuzbjyQnkW8mYed1oOFbG-4",
  authDomain: "orphanaide.firebaseapp.com",
  projectId: "orphanaide",
  storageBucket: "orphanaide.appspot.com",
  messagingSenderId: "42815706163",
  appId: "1:42815706163:web:e539dab75415ba72cbff46",
  measurementId: "G-H99B1MH0CT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const handleLogin=(e)=>{

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.alert("Signed in!");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Invalid Credentials!")
    });

    setEmail('');
    setPassword('');
   

   }


    return(
        <>
    <center> <h1> Login Form </h1> </center> 
    <form onSubmit={handleLogin}>
        <div className="container"> 
            <label>E-mail ID: </label> 
            <input type="text" value={email} placeholder="Enter e-mail ID" name="email" required onChange={(event)=>(setEmail(event.target.value))} /><br/>
            <label>Password : </label> 
            <input type="password" value={password} placeholder="Enter Password" name="password" required onChange={(event)=>(setPassword(event.target.value))}/><br/>
            <button type="submit">Login</button> <br/>
            {/* <input type="checkbox" checked="checked"/> Remember me <br/> */}
            <button type="button" className="cancelbtn"> Cancel</button>
        </div> 
    </form>   
    </>
);
}