//inital command to run firebase: npm install firebase
import { initializeApp } from "firebase/app"; //.
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
// import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  //.
  apiKey: "AIzaSyCjepQRClsAeuzbjyQnkW8mYed1oOFbG-4",
  authDomain: "orphanaide.firebaseapp.com",
  projectId: "orphanaide",
  storageBucket: "orphanaide.appspot.com",
  messagingSenderId: "42815706163",
  appId: "1:42815706163:web:e539dab75415ba72cbff46",
  measurementId: "G-H99B1MH0CT",
};

const app = initializeApp(firebaseConfig); //.
const auth = getAuth();
const db = getDatabase(app);

//-----------REGISTER--------------
const HandleSignupFirebase = (
  navigate,
  email,
  password,
  name,
  phone,
  repeat
) => {
  let flag = true;
  // localStorage.setItem("SignedIn", "");

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

  if (flag) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.alert("User Created");
        const user = userCredential.user;
        writeUserData(user.uid, name, email, phone);
        const currentUser = auth.currentUser;
        updateProfile(currentUser, {
          displayName: name,
        })
          .then(() => {
            // localStorage.setItem("SignedIn", flag);
            navigate("../Login");
            //send email verification
          })
          .catch((error) => {
            const errorMessage = error.message;
            window.alert(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  }
};

const HandleOrphanageSignupFirebase = (
  navigate,
  email,
  password,
  name,
  address,
  orpstate,
  phone,
  repeat
) => {
  let flag = true;
  // localStorage.setItem("SignedIn", "");

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

  if (flag) {
        writeOrphanageData(address, orpstate, name, email, phone);
        // const currentUser = auth.currentUser;
        // updateProfile(currentUser, {
        //   displayName: name,
        // })
        //   .then(() => {
        //     // localStorage.setItem("SignedIn", flag);
        //     navigate("../Login");
        //     //send email verification
        //   })
        //   .catch((error) => {
        //     const errorMessage = error.message;
        //     window.alert(errorMessage);
        //   });
  }
};

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

function writeOrphanageData(address, orpstate, name, email, phone) {
  console.log("inside write");
  var check = true;
  set(ref(db, "review/" + address + "_" + orpstate), {
    name: name,
    email: email,
    phone: phone,
    address: address,
    state: orpstate
  }).catch((error) => {
    check = false;
    window.alert(error.message);
  });
  if(check){
    window.alert('Request sent successfully!');
  }
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

function validatePhone(mobileNumber) {
  if (mobileNumber.length == 10) {
    return true;
  } else {
    return false;
  }
}

//-----------LOGIN---------------------
const HandleLoginFirebase = (navigate, email, password) => {
  // var navigate = useNavigate();
  if (!validateField(email) || !validateField(password)) {
    window.alert("Please fill all the fields.");
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // window.alert("Signed in!");
        console.log(auth.currentUser.accessToken);

        set(ref(db, "token/" + auth.currentUser.uid), {
          token: auth.currentUser.accessToken,
        }).catch((error) => {
          window.alert(error.message);
        });

        //localStorage.setItem("Bearer", auth.currentUser.accessToken);
        navigate("/Dashboard");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  }
};

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
// const loginUser = async (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log("signed in");
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };

//----------------WRITE DATA--------------------------
// function writeUserData(userId, name, email) {
//   console.log("inside write");
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//   }).catch((error) => {
//     console.log(error.message);
//   });
// }

//----------------READ DATA--------------------------
function readUserData(userId) {
  console.log("inside read");
  const databaseRef = ref(db, "users/" + userId);
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
const Logout = (navigate) => {
  if (auth.currentUser.uid != null) {
    set(ref(db, "token/" + auth.currentUser.uid), {
      token: null,
    }).catch((error) => {
      window.alert(error.message);
    });
    localStorage.removeItem("Bearer");
  }

  signOut(auth);
  //localStorage.removeItem("Bearer");
  navigate("../Login");
};

const FetchToken = () => {
  if (auth.currentUser != null) {
    console.log(auth.currentUser.uid);
    const databaseRef = ref(db, "token/" + auth.currentUser.uid);
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Welcome to fetchtoken");
      localStorage.setItem("Bearer", data.token);
    });
  } else {
    console.log("Inside else");
    localStorage.removeItem("Bearer");
  }
};

export {
  HandleSignupFirebase,
  HandleLoginFirebase,
  HandleOrphanageSignupFirebase,
  writeUserData,
  readUserData,
  sendPasswordReset,
  Logout,
  FetchToken,
};
