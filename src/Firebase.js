//inital command to run firebase: npm install firebase
import { initializeApp } from "firebase/app"; //.
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
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
  uploadBytes,
} from "firebase/storage";
import { getDatabase, ref, set, onValue } from "firebase/database";
import defaultOrphanageImage from "./components/images/defaultOrphanageImage.png";
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
            navigate("/Login");
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
  id,
  email,
  password,
  name,
  address,
  orpstate,
  phone,
  repeat
) => {
  let flag = true;

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
    writeReviewData(id, address, orpstate, name, email, phone, password);
    navigate("/LoginOrphanage");
  }
};

function writeUserData(userId, name, email, phone) {
  console.log("inside write");
  set(ref(db, "users/" + userId), {
    name: name,
    email: email,
    phone: phone,
    donation: 0,
  }).catch((error) => {
    window.alert(error.message);
  });
}

function compare(a, b) {
  if (a.time < b.time) {
    return 1;
  }
  if (a.time > b.time) {
    return -1;
  }
  return 0;
}

function acceptOrphanage(navigate, id) {
  console.log("Accept" + id);
  const storage = getStorage();
  const reviewRef = ref(db, "review/");
  let i = 0;
  let obj = {};

  onValue(reviewRef, (snapshot) => {
    snapshot.forEach(function (childSnapshot) {
      i++;
      if (i == id) {
        let refDelete = childSnapshot.ref.toString();
        let idx = refDelete.indexOf("review/");
        localStorage.setItem("idRef", refDelete.substring(idx));
        obj = childSnapshot.val();
        localStorage.setItem("removeObj", obj);
      }
    });
  });

  let len = 0;
  let check = 0;
  const orphanageRef = ref(db, "orphanage/");
  onValue(orphanageRef, (snapshot) => {
    len = snapshot.val().length;

    if (Object.keys(obj).length != 0) {
      check++;
    }

    if (check == 1) {
      console.log(obj);
      console.log(len + 1);

      set(ref(db, "orphanage/" + len), obj);

      // add image from here

      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(user).then(() => {
            // Email verification sent!
            let msg =
              "An email verification link has been sent to " + user.email;
            window.alert("msg" + msg);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          window.alert("error" + errorMessage);
        });
    }
  });

  console.log(localStorage.getItem("removeObj"));

  setTimeout(function () {
    set(ref(db, localStorage.getItem("idRef")), null);
  }, 5000);
}

function rejectOrphanage(id) {
  console.log("reject" + id);
  const reviewRef = ref(db, "review/");
  let i = 0;

  onValue(reviewRef, (snapshot) => {
    snapshot.forEach(function (childSnapshot) {
      i++;
      if (i == id) {
        console.log(childSnapshot.ref.toString());
        let refDelete = childSnapshot.ref.toString();
        let idx = refDelete.indexOf("review/");
        localStorage.setItem("idRef", refDelete.substring(idx));
      }
    });
  });

  let idRef = "";
  setTimeout(function () {
    idRef = localStorage.getItem("idRef");
    console.log(idRef);
  }, 5000);

  setTimeout(function () {
    set(ref(db, idRef), null);
  }, 5000);
}

function loadReviewRequest() {
  setTimeout(function () {
    console.log("Inside load timer");
    const container = document.getElementById("tableReviewRequest");
    container.innerHTML = "";
    let str1 = "";
    let i = 0;
    const reviewRef = ref(db, "review/");
    onValue(reviewRef, (snapshot) => {
      let data = snapshot.val();
      if (data == null) {
        str1 = `<div class="w-full" style="background-color: #f3f4f6;  text-align: center;"><h1 style="color: black; font-size: 18px; padding-bottom: 15px; padding-top: 1rem;">No pending review requests.</h1></div>`;
      } else {
        snapshot.forEach(function (childSnapshot) {
          var childData = childSnapshot.val();
          console.log(childData);
          i++;
          str1 += ` <tr class="text-gray-700">
          <td class="px-4 py-3 border">
            <div class="flex items-center text-sm">
              <div>
                <p>${childData.id}</p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 border text-md ">${childData.name}</td>
          <td class="px-4 py-3 border text-md ">${childData.email}</td>
          <td class="px-4 py-3 border text-md ">${childData.address}</td>
          <td class="px-4 py-3 border text-md ">${childData.state}</td>
          <td class="px-4 py-3 border text-md ">${childData.contact}</td>
          <td class="px-4 py-3 border text-sm flex flex-wrap">
          <a href = "/Dashboard" onClick="(function(){
            localStorage.setItem('acceptState',${i});
        })();" class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded">Approve</a>
          <a href = "/Dashboard" onClick="(function(){
            localStorage.setItem('rejectState',${i});
        })();" class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Deny</button>
          </td>
        </tr>`;
        });
      }

      container.innerHTML = str1;
    });
  }, 5000);
}

function allUserDonationDetails() {
  let arr = [];
  const container = document.getElementById("table-dataUser");
  container.innerHTML = "";
  let str1 = "";

  const donationRef = ref(db, "donations/");
  onValue(donationRef, (snapshot) => {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      let obj = {
        amount: 0,
        time: 0,
        id: childSnapshot.key,
      };
      for (let i = 1; i < childData.length; i++) {
        // console.log(childData[i]);
        obj.amount += parseInt(childData[i].amount);
        obj.time = childData[i].time;
      }

      arr.push(obj);
    });

    // console.log(arr);
    arr.sort(compare);

    let usernameArr = [];

    for (let idx = 0; idx < arr.length; idx++) {
      const userRef = ref(db, "users/" + arr[idx].id);

      onValue(userRef, (snapshot) => {
        usernameArr.push(snapshot.val().name);
      });
    }

    setTimeout(function () {
      for (let idx = 0; idx < arr.length; idx++) {
        console.log("hey");
        const date = new Date(arr[idx].time);
        str1 += `<tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div class="flex items-center">
              <div>
                <p class="text-gray-900 whitespace-no-wrap">
                  ${usernameArr[idx]}
                </p>
              </div>
            </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
            ₹ ${arr[idx].amount}
            </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="text-gray-900 whitespace-no-wrap">
            ${date.toDateString()}
            </p>
          </td>
        </tr>`;
      }
    }, 3000);

    setTimeout(function () {
      container.innerHTML = str1;
    }, 4000);
  });

  console.log(arr);
}

function getOrphanageDataProfile(name) {
  //orphanage detail
  //orphanage donation
  const reference = ref(db, "orphanage/");
  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    let val = data.find((c) => c.name === name);
    let arr = [];

    const donationRef = ref(db, "donations/");
    onValue(donationRef, (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        console.log(childSnapshot.key);
        var childData = childSnapshot.val();
        console.log(childData);
        for (let i = 1; i < childData.length; i++) {
          if (childData[i].orphanage === name) {
            let obj = {
              amount: childData[i].amount,
              orphanage: childData[i].orphanage,
              time: childData[i].time,
              id: childSnapshot.key,
            };

            arr.push(obj);
          }
        }
      });
      for (let i = 0; i < arr.length; i++) console.log(arr[i]);
    });
  });
}

function writeReviewData(id, address, orpstate, name, email, phone, password) {
  console.log("inside write");
  var check = true;
  set(ref(db, "review/" + id), {
    id: id,
    name: name,
    email: email,
    contact: phone,
    address: address,
    state: orpstate,
    password: password,
    current_condition: "Not Yet Entered By Admin",
    founded: 2001,
    founder: "Larry Stocks",
    donation: 0,
    imagelink: "",
    number_of_children: 23,
  }).catch((error) => {
    check = false;
    window.alert(error.message);
  });
  if (check) {
    window.alert("Request sent successfully!");
  }
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
      // const errorCode = error.code;
      // const errorMessage = error.message;
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

function waitThenMove(navigate) {
  setTimeout(function () {
    navigate("/Dashboard");
    console.log("REDIRECT TO DASHBOARD");
  }, 5000);
}

function donationToOrphanage(amount) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("uid" + uid);

      const reference = ref(db, "users/" + uid);
      let i = 0;

      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        console.log(i);
        i++;
        if (i === 1) {
          console.log(data);
          console.log(data.donation);
          data.donation += parseInt(amount);
          set(ref(db, "users/" + uid), data).catch((error) => {
            window.alert(error.message);
          });
        }
      });

      const refDon = ref(db, "donations/" + uid);
      let k = 0;

      let idOrphanageItem = localStorage.getItem("idOrphanage");

      const reft = ref(db, "orphanage/" + idOrphanageItem);
      let j = 0;
      let nameOrph = "";

      onValue(reft, (snapshot) => {
        const data = snapshot.val();
        let val = data;
        nameOrph = val.name;
        // let idx = data.indexOf(val);
        console.log(nameOrph);
        console.log(data);
        j++;
        if (j === 1) {
          val.donation += parseInt(amount);
          set(ref(db, "orphanage/" + idOrphanageItem), val).catch((error) => {
            window.alert(error.message);
          });
        }
      });

      onValue(refDon, (snapshot) => {
        let donationsArr = [];
        let data = snapshot.val();
        k++;
        if (k === 1) {
          if (data == null) {
            let obj = {
              amount: amount,
              time: new Date().getTime(),
              orphanage: nameOrph,
            };

            set(ref(db, "donations/" + uid + "/" + 1), obj).catch((error) => {
              window.alert(error.message);
            });
          } else {
            console.log(data);
            var keys = Object.keys(data);
            keys.forEach(function (key) {
              donationsArr.push(data[key]);
            });

            let obj = {
              amount: amount,
              time: new Date().getTime(),
              orphanage: nameOrph,
            };

            console.log(obj);
            console.log(donationsArr);
            let donationsArrLen = donationsArr.length + 1;
            set(ref(db, "donations/" + uid + "/" + donationsArrLen), obj).catch(
              (error) => {
                window.alert(error.message);
              }
            );
          }
        }
      });
    }
  });
}

function loadDashboardOrphanage(state) {
  if (state == null || state == "") {
    const databaseRef = ref(db, "orphanage/");
    const storage = getStorage();
    onValue(databaseRef, (snapshot) => {
      let data = snapshot.val();
      const container = document.getElementById("orphanage_cards");
      container.innerHTML = "";
      for (let idx = 0; idx < data.length; idx++) {
        const pathReference = sRef(storage, data[idx].name);
        listAll(pathReference)
          .then((res) => {
            let itemRef = res.items[0];
            console.log(data[idx].name + "  " + itemRef);
            if (itemRef == undefined) {
              const card = document.createElement("div");
              card.classList = "card-body";
              const content2 = ` <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block mb-3"
                    src="${defaultOrphanageImage}"
                  />
                </a>
                <a class="mt-4" href="/SpecificOrphanage" onClick="(function(){
                  localStorage.setItem('idOrphanage',${idx});
              })();">
                  <h3 class="mt-4 text-gray-500 text-xs tracking-widest title-font mb-1">
                    Current Condition: ${data[idx].current_condition}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                  ${data[idx].name}
                  </h2>
                  <p class="mt-1">${data[idx].address}</p>
                  <p class="mt-1 font-bold">Founder: ${data[idx].founder}</p>
                  <p class="mt-1 font-bold">Founded: ${data[idx].founded}</p>
                </a>
              </div>`;

              container.innerHTML += content2;
            } else {
              getDownloadURL(itemRef).then((url) => {
                const card = document.createElement("div");
                card.classList = "card-body";
                const content2 = ` <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block mb-3"
                      src="${url}"
                    />
                  </a>
                  <a class="mt-4" href="/SpecificOrphanage" onClick="(function(){
                    localStorage.setItem('idOrphanage',${idx});
                })();">
                    <h3 class="mt-4 text-gray-500 text-xs tracking-widest title-font mb-1">
                      Current Condition: ${data[idx].current_condition}
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                    ${data[idx].name}
                    </h2>
                    <p class="mt-1">${data[idx].address}</p>
                    <p class="mt-1 font-bold">Founder: ${data[idx].founder}</p>
                    <p class="mt-1 font-bold">Founded: ${data[idx].founded}</p>
                  </a>
                </div>`;

                container.innerHTML += content2;
              });
            }
          })
          .catch((error) => {});
      }
    });
  } else {
    const databaseRef = ref(db, "orphanage/");
    const storage = getStorage();
    onValue(databaseRef, (snapshot) => {
      let data = snapshot.val();
      const container = document.getElementById("orphanage_cards");
      let fetchedOrphanage = [];
      let ids = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i].state === state) {
          fetchedOrphanage.push(data[i]);
          ids.push(i);
        }
      }
      container.innerHTML = "";

      for (let idx = 0; idx < fetchedOrphanage.length; idx++) {
        let id = ids[idx];
        const pathReference = sRef(storage, fetchedOrphanage[idx].name);
        listAll(pathReference)
          .then((res) => {
            let itemRef = res.items[0];
            getDownloadURL(itemRef).then((url) => {
              const card = document.createElement("div");
              card.classList = "card-body";
              const content2 = ` <div class="lg:w-1/2 md:w-1 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden mb-4">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block "
                  src="${url}"
                />
              </a>
              <a class="mt-4" href="/SpecificOrphanage" onClick="(function(){
                localStorage.setItem('idOrphanage',${id});
            })();">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Current Condition: ${fetchedOrphanage[idx].current_condition}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                ${fetchedOrphanage[idx].name}
                </h2>
                <p class="mt-1">${fetchedOrphanage[idx].address}</p>
                <p class="mt-1 font-bold">Founder: ${data[idx].founder}</p>
                <p class="mt-1 font-bold">Founded: ${data[idx].founded}</p>
              </a>
            </div>`;

              container.innerHTML += content2;
            });
          })
          .catch((error) => {});
      }
      console.log(fetchedOrphanage);
    });
  }
}

let chart_data = [];

function loadUserProfile() {
  chart_data = {
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  };
  let str1 = "";

  const databaseRef_user_donation = ref(
    db,
    "donations/" + auth.currentUser.uid
  );
  onValue(databaseRef_user_donation, (snapshot) => {
    let data = snapshot.val();
    const container = document.getElementById("table-data");
    container.innerHTML = "";

    if (data != null) {
      for (let i = 1; i < data.length; i++) {
        const date = new Date(data[i].time);
        var time = date.toLocaleString("en-US");
        var month = time.split("/")[0];
        var month_int = parseInt(month);
        chart_data.chartData["data"][month_int - 1] += parseInt(data[i].amount);
      }

      for (let idx = 1; idx < data.length; idx++) {
        const date = new Date(data[idx].time);
        str1 += `<tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap">
                ${data[idx].orphanage}
              </p>
            </div>
          </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
            ${data[idx].amount}
          </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
          ${date.toDateString()}
          </p>
        </td>
      </tr>`;
      }
    } else {
      str1 = `<div style="width: 240%; text-align: center; margin-top: 1rem;"><h1 style="color: black; font-size: 18px; padding-bottom: 15px;">No donations till now.</h1></div>`;
    }
    container.innerHTML = str1;
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

function loadOrphanageTitle(id) {
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

  const reference = ref(db, "orphanage/" + id);
  onValue(reference, (snapshot) => {
    let arr = [];
    const data = snapshot.val();
    // console.log(data);
    let val = data;
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

    // const storage = getStorage();
    // const pathReference = sRef(storage, val.name);
    // console.log(pathReference);

    // listAll(pathReference)
    //   .then((res) => {
    //     res.prefixes.forEach((folderRef) => {
    //       console.log("folder " + folderRef);
    //     });
    //     res.items.forEach((itemRef) => {
    //       console.log("item " + itemRef);
    //       getDownloadURL(itemRef).then((url) => {
    //         const img = document.getElementById("imageOrphanage");
    //         img.setAttribute("src", url);
    //         // Insert url into an <img> tag to "download"
    //       });
    //     });
    //   })
    //   .catch((error) => {});
  });
}

function validateEmail(email) {
  let expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) === true) {
    return true;
  } else {
    return false;
  }
}

function validatePassword(password) {
  //min 6 letter password, with at least a symbol, upper and lower case letters and a number
  let expression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (expression.test(password) === false) {
    return false;
  } else {
    return true;
  }
}

function validatePhone(mobileNumber) {
  if (mobileNumber.length === 10) {
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
        console.log(email.substring(email.indexOf("@") + 1));
        if (email.substring(email.indexOf("@") + 1) === "OrphanAide.com") {
          set(ref(db, "token/" + auth.currentUser.uid), {
            token: auth.currentUser.accessToken,
          }).catch((error) => {
            window.alert(error.message);
          });

          localStorage.setItem("isAdmin", "yes");
          navigate("/Dashboard");
        } else {
          localStorage.removeItem("isAdmin");
          if (!auth.currentUser.emailVerified) {
            window.alert("Verify your email!");
          } else {
            set(ref(db, "token/" + auth.currentUser.uid), {
              token: auth.currentUser.accessToken,
            }).catch((error) => {
              window.alert(error.message);
            });

            //localStorage.setItem("Bearer", auth.currentUser.accessToken);
            console.log("Inside normal");
            navigate("/Dashboard");
          }
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  }
};

const HandleLoginFirebaseOrphanage = (navigate, id, email, password) => {
  if (!validateField(email) || !validateField(password) || !validateField(id)) {
    window.alert("Please fill all the fields.");
  } else {
    const orphanageRef = ref(db, "orphanage/");
    onValue(orphanageRef, (snapshot) => {
      let data = snapshot.val();

      if (data == null) {
        alert("You have not registered!");
        return;
      }

      let val = data.find((c) => c.email === email);
      if (val == null) {
        const reviewRef = ref(db, "review/" + id);
        onValue(reviewRef, (snapshot) => {
          let reviewData = snapshot.val();
          if (reviewData == null) {
            alert("You have not registered!");
          } else {
            if (
              reviewData.email === email &&
              reviewData.password === password
            ) {
              alert("Your request is still pending!");
            } else {
              alert("Incorrect Email or Password");
            }
          }
        });
      } else {
        if (val.email == email && val.password == password && val.id == id) {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // window.alert("Signed in!");
              console.log(auth.currentUser.accessToken);
              if (!auth.currentUser.emailVerified) {
                window.alert("Verify your email!");
              } else {
                set(ref(db, "token/" + auth.currentUser.uid), {
                  token: auth.currentUser.accessToken,
                }).catch((error) => {
                  window.alert(error.message);
                });

                localStorage.setItem("Bearer", auth.currentUser.accessToken);
                localStorage.setItem("OrphanageId", id);
                navigate("/Dashboard");
              }
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              window.alert(errorMessage);
            });
        } else {
          if (val.id != id) {
            alert("You have not registered!");
          } else {
            alert("Incorrect Email or Password");
          }
        }
      }
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

//--------LOGOUT---------
const Logout = (navigate) => {
  if (auth.currentUser.uid != null) {
    set(ref(db, "token/" + auth.currentUser.uid), {
      token: null,
    }).catch((error) => {
      window.alert(error.message);
    });
    localStorage.removeItem("Bearer");
    localStorage.removeItem("isAdmin");
  }
  navigate("/");
  signOut(auth);
  //localStorage.removeItem("Bearer");
};

const FetchToken = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
      const databaseRef = ref(db, "token/" + user.uid);
      onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Welcome to fetchtoken");
        localStorage.setItem("Bearer", data.token);
      });
    } else {
      console.log("Inside else");
      localStorage.removeItem("Bearer");
    }
  });
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
  writeOrphanageData,
  sentForgetPasswordEmail,
  loadOrphanageTitle,
  writeNewsData,
  loadNewsData,
  waitThenMove,
  donationToOrphanage,
  writeReviewData,
  HandleLoginFirebaseOrphanage,
  getOrphanageDataProfile,
  allUserDonationDetails,
  loadDashboardOrphanage,
  loadUserProfile,
  chart_data,
  loadReviewRequest,
  acceptOrphanage,
  rejectOrphanage,
};
