import { React, useState } from "react";

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
  updateProfile,
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

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  let flag = true;

  const handleSignup = (e) => {
    if (!validatePhone(phone)) {
      window.alert("Phone number must contain 10 digits!");
      flag = false;
    }

    if (!validateEmail(email)) {
      window.alert("Enter a valid email address!");
      flag = false;
    }

    if (!validatePassword(password)) {
      window.alert(
        "Password must contain at least a symbol, an uppercase, a lower case letter and a number!"
      );
      flag = false;
    }

    if (password !== repeat) {
      window.alert("Both passwords must be same!");
      flag = false;
    }

    e.preventDefault();
    if (flag) {
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
            })
            .catch((error) => {
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
  };

  function emptyField() {
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setRepeat("");
  }
  function writeUserData(userId, name, email, phone) {
    console.log("inside write");
    set(ref(db, "users/" + userId), {
      name: name,
      email: email,
      phone: phone,
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

  return (
    <>
      <body>
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide">
                Keep it special
              </h1>
              <p className="text-3xl my-4">
                Capture your personal memory in unique way, anywhere.
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
            style={{ backgroundColor: "#161616" }}
          >
            <div
              className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
              }}
            >
              <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div className="w-full py-6 z-20">
              <h1 className="my-6 lg:text-7xl ">OrphanAide</h1>
              <form
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                onSubmit={handleSignup}
              >
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    value={name}
                    required
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={phone}
                    required
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    className="block w-full p-4 text-lg rounded-sm bg-black"
                    value={repeat}
                    required
                    onChange={(event) => setRepeat(event.target.value)}
                  />
                </div>
                <div className="px-4 pb-2 pt-4">
                  <button
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
