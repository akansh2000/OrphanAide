//inital command to run firebase: npm install firebase

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

//-----------REGISTER--------------
const registerWithEmailAndPassword = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Created");
      const user = userCredential.user;
      writeUserData(user.uid, password, email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

//-----------LOGIN---------------------
const loginUser = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("signed in");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

//----------------WRITE DATA--------------------------
function writeUserData(userId, name, email) {
  console.log("inside write");
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
  }).catch((error) => {
    console.log(error.message);
  });
}

//----------------READ DATA--------------------------
function readUserData(userId) {
  console.log("inside read");
  const databaseRef = ref(db, "users/" + "VldRS5NzmhOs1GlmRpvVhAXz67l2");
  onValue(databaseRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data.email);
  });
}

//-----------DELETE DATA---------------

//-----------FORGOT PASSWORD---------------
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//--------EMAIL VERIFICATION---------

//--------LOGOUT---------
const logout = () => {
  signOut(auth);
};

export {
  registerWithEmailAndPassword,
  loginUser,
  writeUserData,
  readUserData,
  sendPasswordReset,
};
