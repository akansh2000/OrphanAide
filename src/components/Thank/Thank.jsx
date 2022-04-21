import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { donationToOrphanage } from "../../Firebase";
import jsPDF from "jspdf";

import certificateTemplate from "../images/certificateTemplate.png";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const generatePDF = (name, amount, orphanage) => {
  if (name) {
    name = toTitleCase(name);
    orphanage = toTitleCase(orphanage);
    amount = "Rs." + amount;
    var doc = new jsPDF({
      orientation: "portrait",
    });
    doc.addFont("helvetica", "normal");
    doc.setFontSize(25);
    doc.setTextColor(0, 0, 0);
    doc.addImage(certificateTemplate, "JPEG", -5, 0, 220, 300);
    doc.text(94, 121, name);
    doc.text(123, 229, amount);
    doc.text(104, 254, orphanage);
    doc.save("DonationReceipt.pdf");
  } else {
    alert("Please enter name");
  }
};

export default function Thank() {
  const navigate = useNavigate();

  // const [pdf_check, setCheck] = useState(0);

  setTimeout(function () {
    navigate("/Dashboard");
  }, 5000);

  let user_donation = [];
  let z = 0;
  useEffect(() => {
    let amount = localStorage.getItem("amount");
    donationToOrphanage(amount);
    localStorage.removeItem("amount");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const databaseRef_user = ref(db, "donations/" + user.uid);
        onValue(databaseRef_user, (snapshot) => {
          z++;
          const data = snapshot.val();
          // console.log(user_donation[user_donation.length - 1]);
          if(z==2){
            generatePDF(
              user.displayName,
              data[data.length - 1].amount,
              data[data.length - 1].orphanage
            );

          }
        });
      } else {
        //  alert("User not found");
      }
    });
  }, []);

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden  bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/550x/98/c6/9a/98c69a66353a76217b371490bd085528.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1
              className="text-5xl font-bold text-left tracking-wide"
              style={{ fontWeight: "500", fontSize: "3.5rem" }}
            >
              Bringing Happiness!
            </h1>
            <p
              className="text-3xl my-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Your donation will help in creating a bright future. Hope you have
              a nice day!
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{
            backgroundColor: "#161616",
          }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.squarespace-cdn.com/content/v1/5005cf7684ae9eec4f9d1861/1518547038540-R8GB0LAXMIV2HJDHRX1F/team.jpg?format=1000w)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1
              className="my-10 text-9xl mb-20"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Thank You!
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
