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
  updateProfile 
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


export default function Signup(){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    let flag = true;

    const handleSignup=(e)=>{

        if( !validatePhone(phone)){
            window.alert("Phone number must contain 10 digits!");
            flag = false;
        }

        if( !validateEmail(email)){
            window.alert("Enter a valid email address!");
            flag = false;
        }

        if( !validatePassword(password)){
            window.alert('Password must contain at least a symbol, an uppercase, a lower case letter and a number!')
            flag = false;
          }

        if( password !== repeat){
            window.alert('Both passwords must be same!')
            flag = false;
        }
        
        e.preventDefault();
        if(flag){
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          window.alert("User Created");
          const user = userCredential.user;
          writeUserData(user.uid, name, email, phone);
          const currentUser = auth.currentUser;
          updateProfile(auth.currentUser, {
              displayName: name,
            })
            .then(() => {
              // Update successful
              // ...
          // sendEmailVerification()
          //       .then(function () {
          //         window.alert("Verification has been sent to your email!");
          //       })
          //       .catch(function (error) {
          //         console.log(error);
          //         window.alert("There was some error in sending the verification email!");
          //       });
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorMessage);
              });
          emptyField();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert(errorMessage);
        });
        }

    }

    function emptyField(){
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');
      setRepeat('');
    }
    function writeUserData(userId, name, email, phone) {
        console.log("inside write");
        set(ref(db, "users/" + userId), {
          name: name,
          email: email,
          phone: phone
        }).catch((error) => {
          window.alert(error.message);
        });
      }

      function validateEmail(email) {
        let expression = /^[^@]+@\w+(\.\w+)+\w$/;
        if (expression.test(email) == true) {
          return true;
        } else {
          return false;
        }
      }
      
      function validatePassword(password) {
        //min 6 letter password, with at least a symbol, upper and lower case letters and a number
        let expression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      
        if (expression.test(password) == false) {
          return false;
        } else {
          return true;
        }
      }
      
      function validateField(field) {
        if (field == null) {
          return false;
        }
      
        if (field.length <= 0) {
          return false;
        } else {
          return true;
        }
      }
      
      function validatePhone(mobileNumber) {
        if (mobileNumber.length == 10) {
          return true;
        } else {
          return false;
        }
      }


    return(
        <>
    <center> <h1> Signup Form </h1> </center> 
    <form onSubmit={handleSignup}>
        <div className="container"> 
            <label>Name: </label> 
            <input type="text" placeholder="Enter Name" name="name" value={name} required onChange={(event)=>(setName(event.target.value))} /><br/>
            {/* <label>Last Name: </label> 
            <input type="text" placeholder="Enter Last Name" name="lname" required /><br/> */}
            <label>Contact Number: </label> 
            <input type="text" placeholder="Enter Contact Number" name="cno" value={phone} required onChange={(event)=>(setPhone(event.target.value))} /><br/>
            <label>E-mail ID: </label> 
            <input type="text" placeholder="Enter e-mail ID" name="email" value={email} required onChange={(event)=>(setEmail(event.target.value))}/><br/>
            <label>Password : </label> 
            <input type="password" placeholder="Enter Password" name="password" value={password} required onChange={(event)=>(setPassword(event.target.value))}/><br/>
            <label >Repeat Password: </label>
            <input type="password" placeholder="Re-enter Password" name="password" value={repeat} required onChange={(event)=>(setRepeat(event.target.value))}/><br/>
            <button type="submit">Signup</button> <br/>
            {/* <input type="checkbox" checked="checked"/> Remember me <br/> */}
            <button type="button" className="cancelbtn"> Cancel</button>
        </div> 
    </form>    
    </>
);
}