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
  sendEmailVerification,
} from "firebase/auth";
import {
  getStorage,
  ref as sRef,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { getDatabase, ref, set, onValue } from "firebase/database";
import Orphanages from "./components/Orphanages";
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
        sendEmailVerification(user).then(() => {
          // Email verification sent!
          let msg = "An email verification link has been sent to " + user.email;
          window.alert(msg);
        });

        updateProfile(auth.currentUser, {
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

function writeOrphanageData(obj, i) {
  console.log("inside write");
  set(ref(db, "orphanage/" + i), obj).catch((error) => {
    window.alert(error.message);
  });
}

function sentForgetPasswordEmail(navigate, email) {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      window.alert("New Password Mail has been sent to you!");
      navigate("../Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function writeNewsData(title, desc, state, status) {
  let obj = {
    title: title,
    desc: desc,
    state: state,
    status: status,
  };

  console.log("inside write");
  set(ref(db, "news/" + title), obj).catch((error) => {
    window.alert(error.message);
  });
}

function waitThenMove() {
  setTimeout(function () {
    console.log("REDIRECT TO DASHBOARD");
  }, 5000);
}

function donationToOrphanage() {
  const reference = ref(db, "orphanage/");
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    let val = data.find(
      (c) => c.name === localStorage.getItem("Orphanange Name")
    );

    let donation = val.donation;

    window.alert(donation);

    const storage = getStorage();
    const pathReference = sRef(storage, val.name);
    console.log(pathReference);
  });
}

function loadNewsData() {
  const reference = ref(db, "news/");
  const storage = getStorage();

  onValue(reference, (snapshot) => {
    let arr = [];
    let data = snapshot.val();
    var keys = Object.keys(data);
    keys.forEach(function (key) {
      if (data[key].status === false) {
        arr.push(data[key]);
      } else {
        arr.unshift(data[key]);
      }
    });

    console.log(arr);

    const container = document.getElementById("itemCards");
    container.innerHTML = "";

    for (let idx = 0; idx < arr.length; idx++) {
      const pathReference = sRef(storage, arr[idx].title);
      listAll(pathReference)
        .then((res) => {
          for (let i = 0; i < res.items.length; i++) {
            // console.log("item " + itemRef);
            let itemRef = res.items[i];
            getDownloadURL(itemRef).then((url) => {
              console.log(i + " " + idx);
              const card = document.createElement("div");
              card.classList = "card-body";
              const content1 = `
                <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-100  p-6 rounded-lg" style="height:625px; overflow-y: auto;">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src="${url}" alt="content"/>`;

              const content2 = `<h3 class="tracking-widest text-red-500 text-xl font-medium title-font">URGENT!!</h3>`;

              const content3 = `
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">${arr[idx].state}</h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${arr[idx].title}</h2>
                    <p class="leading-relaxed text-base">${arr[idx].desc}</p>
                  </div>
                </div>
                `;

              // console.log(arr[idx].status);
              if (arr[idx].status) {
                container.innerHTML += content1 + content2 + content3;
              } else {
                container.innerHTML += content1 + content3;
              }
            });
          }
        })
        .catch((error) => {});
    }
  });
}

function loadOrphanageTitle(name) {
  let orphanageName = document.querySelector("#orphanageName");
  let orphanageState = document.querySelector("#orphanageState");
  let contactnoOrphanage = document.querySelector("#contactnoOrphanage");
  let noofchildrenOrphanage = document.querySelector("#noofchildrenOrphanage");
  let currentstatusOrphanage = document.querySelector(
    "#currentstatusOrphanage"
  );
  let founderOrphanage = document.querySelector("#founderOrphanage");
  let foundedOrphanage = document.querySelector("#foundedOrphanage");
  let addressOrphanage = document.querySelector("#addressOrphanage");
  let donationrecieved = document.querySelector("#donationrecieved");

  const reference = ref(db, "orphanage/");
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    let val = data.find((c) => c.name === name);
    // console.log(orphanageName);
    // console.log(val.name);
    orphanageName.innerHTML = val.name;
    orphanageState.innerHTML = val.state;
    contactnoOrphanage.innerHTML = "+91 " + val.contact;
    noofchildrenOrphanage.innerHTML = val.number_of_children;
    if (val.current_condition === "Urgent Need") {
      currentstatusOrphanage.innerHTML = val.current_condition;
      currentstatusOrphanage.style.fontWeight = "bold";
      currentstatusOrphanage.style.color = "red";
    } else {
      currentstatusOrphanage.innerHTML = val.current_condition;
    }
    founderOrphanage.innerHTML = val.founder;
    foundedOrphanage.innerHTML = val.founded;
    // console.log(val.address);
    addressOrphanage.innerHTML = val.address;
    let donation = val.donation.toLocaleString("en-IN");
    donationrecieved.innerHTML = "Donation Recieved: ₹" + donation;

    const storage = getStorage();
    const pathReference = sRef(storage, val.name);
    console.log(pathReference);

    listAll(pathReference)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log("folder " + folderRef);
        });
        res.items.forEach((itemRef) => {
          console.log("item " + itemRef);
          getDownloadURL(itemRef).then((url) => {
            const img = document.getElementById("imageOrphanage");
            img.setAttribute("src", url);
            // Insert url into an <img> tag to "download"
          });
        });
      })
      .catch((error) => {});
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
    if (!auth.currentUser.emailVerified) {
      window.alert("Verify your email!");
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
  navigate("../");
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

// const fetchOrphanages = () => {
//   const databaseRef = ref(db, "orphanage/");
//   onValue(databaseRef, (snapshot) => {
//     let orphanagelist = {};
//     const data = snapshot.val();
//     orphanagelist = data;
//     console.log(orphanagelist);
//     <Orphanages list={orphanagelist} />;
//   });
// };

export {
  HandleSignupFirebase,
  HandleLoginFirebase,
  writeUserData,
  readUserData,
  sendPasswordReset,
  Logout,
  FetchToken,
  writeOrphanageData,
  sentForgetPasswordEmail,
  loadOrphanageTitle,
  writeNewsData,
  loadNewsData,
  waitThenMove,
  donationToOrphanage,
};
