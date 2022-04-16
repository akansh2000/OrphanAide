import { Logout } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./images/logo1.png";
import { Transition } from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";
import Graph from "./Graph";

import { initializeApp } from "firebase/app"; //.
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

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
let orphanagelist = [];
let users = [];

export default function Dummy_dashboard() {
  useEffect(() => {
    componentDidUpdate();

    const databaseRef = ref(db, "orphanage/");
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      orphanagelist = data;
      setItems(orphanagelist);
      console.log(auth.currentUser.uid);
    });

    const databaseRef_user = ref(db, "users/");
    onValue(databaseRef_user, (snapshot) => {
      const data = snapshot.val();
      users = data;
    });
  }, []);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const [orphanages, setOrphanages] = useState(1);
  const [profile, setProfile] = useState(0);
  // const [orphanages, setOrphanages] = useState(0);

  function componentDidUpdate() {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }

  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 93765011,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: [
        "10:00",
        "",
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "2:00",
        "",
        "",
        "",
        "4:00",
      ],
      data: [
        2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
        2.325, 2.32,
      ],
    },
  };

  return (
    <>
      <nav
        className=" ml-3 mr-3 sticky top-0 z-50"
        style={{ backgroundColor: "#1a1c23" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center mx-auto"
              style={{
                width: "100%",
                justifyContent: "space-between",
                marginLeft: "-5rem",
              }}
            >
              <div className="flex-shrink-0">
                <img
                  style={{ width: "4rem", height: "4rem" }}
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div
                  className="ml-10 flex items-baseline space-x-4"
                  style={{ width: "100%", justifyContent: "space-evenly" }}
                >
                  <a
                    href="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    News
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    Donate
                  </a>

                  <a
                    href="/Login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 mr-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  News
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  Donate
                </a>

                <a
                  href="/Login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  Log in
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div className="min-h-screen flex flex-row bg-gray-100">
        <div
          className="flex flex-col w-56 overflow-hidden ml-3"
          style={{ backgroundColor: "#1a1c23" }}
        >
          <ul className="flex flex-col py-4">
            <li>
              {orphanages == 1 ? (
                <button
                  href="#"
                  className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                  style={{
                    height: "3rem",
                    width: "130px",
                    marginLeft: "2rem",
                    paddingLeft: "1rem",
                    backgroundColor: "yellowgreen",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    setOrphanages(1);
                    setProfile(0);
                  }}
                >
                  {" "}
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Orphanages
                  </span>
                </button>
              ) : (
                <button
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                  style={{
                    height: "3rem",
                    width: "130px",
                    marginLeft: "2rem",
                    paddingLeft: "1rem",
                  }}
                  onClick={() => {
                    setOrphanages(1);
                    setProfile(0);
                  }}
                >
                  {" "}
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Orphanages
                  </span>
                </button>
              )}
            </li>
            <li>
              {profile == 1 ? (
                <button
                  className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                  style={{
                    height: "3rem",
                    width: "130px",
                    marginLeft: "2rem",
                    paddingLeft: "1rem",
                    backgroundColor: "yellowgreen",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    setOrphanages(0);
                    setProfile(1);
                  }}
                >
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Profile
                  </span>
                </button>
              ) : (
                <button
                  className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                  style={{
                    height: "3rem",
                    width: "130px",
                    marginLeft: "2rem",
                    paddingLeft: "1rem",
                  }}
                  onClick={() => {
                    setOrphanages(0);
                    setProfile(1);
                  }}
                >
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Profile
                  </span>
                </button>
              )}
            </li>
            <li>
              <button
                className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                style={{
                  height: "3rem",
                  width: "130px",
                  marginLeft: "2rem",
                  paddingLeft: "1rem",
                }}
              >
                <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                  Notifications
                </span>
                {/* <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span> */}
              </button>
            </li>
            <li>
              <button
                className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                style={{
                  height: "3rem",
                  width: "130px",
                  marginLeft: "2rem",
                  paddingLeft: "1rem",
                }}
              >
                <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
        {orphanages == 1 ? (
          <div>
            {" "}
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {items.map((item) => (
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src="https://dummyimage.com/420x260"
                        />
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          Current Condition: {item.current_condition}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.name}
                        </h2>
                        <p className="mt-1">{item.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          ""
        )}
        {profile == 1 ? (
          // <section className="text-gray-600 body-font">
          //   <div className="container px-5 py-24 mx-auto">
          //     <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          //       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          //         Welcome, {users[auth.currentUser.uid]["name"]}
          //       </h1>
          //       <p
          //         className="lg:w-1/2 w-full text-gray-500"
          //         style={{ textAlign: "justify" }}
          //       >
          //         We are so glad to have you as a donor on our platform, you are
          //         doing a great service for the poor people of our society. You
          //         are helping poor people with money and food to get them back
          //         on their feet. We hope that you continue such amazing work in
          //         the future.
          //       </p>
          //     </div>
          //     <div className="flex flex-wrap -m-4">
          //       <div className="xl:w-1/3 md:w-1/2 p-4">
          //         <div className="border border-gray-200 p-6 rounded-lg">
          //           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          //             <FaUserAlt />
          //           </div>
          //           <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          //             {users[auth.currentUser.uid]["name"]}
          //           </h2>
          //           <p className="leading-relaxed text-base">
          //             Email: {users[auth.currentUser.uid]["email"]}
          //           </p>
          //           <p className="leading-relaxed text-base">
          //             Contact number: {users[auth.currentUser.uid]["phone"]}
          //           </p>
          //         </div>
          //       </div>
          //       <div className="xl:w-2/3 md:w-1/2 p-4">
          //         <div className="border border-gray-200 p-6 rounded-lg">
          //           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          //             <svg
          //               fill="none"
          //               stroke="currentColor"
          //               stroke-linecap="round"
          //               stroke-linejoin="round"
          //               stroke-width="2"
          //               className="w-6 h-6"
          //               viewBox="0 0 24 24"
          //             >
          //               <circle cx="6" cy="6" r="3"></circle>
          //               <circle cx="6" cy="18" r="3"></circle>
          //               <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          //             </svg>
          //           </div>
          //           <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          //             The Catalyzer
          //           </h2>
          //           <p className="leading-relaxed text-base">
          //             Fingerstache flexitarian street art 8-bit waist co, subway
          //             tile poke farm.
          //           </p>
          //         </div>
          //       </div>
          //     </div>
          //     <section>
          //       <div className="bg-white p-8 rounded-md w-full">
          //         <div className=" flex items-center justify-between pb-6">
          //           <div>
          //             <h2
          //               className="text-gray-600 font-semibold"
          //               style={{ letterSpacing: "2px" }}
          //             >
          //               Donations Table
          //             </h2>
          //             <span className="text-xs">All products item</span>
          //           </div>
          //         </div>
          //         <div>
          //           <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          //             <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          //               <table className="min-w-full leading-normal">
          //                 <thead>
          //                   <tr>
          //                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          //                       Name
          //                     </th>
          //                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          //                       products
          //                     </th>
          //                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          //                       Created at
          //                     </th>
          //                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          //                       QRT
          //                     </th>
          //                     <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          //                       Status
          //                     </th>
          //                   </tr>
          //                 </thead>
          //                 <tbody>
          //                   <tr>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <div className="flex items-center">
          //                         <div className="flex-shrink-0 w-10 h-10">
          //                           <img
          //                             className="w-full h-full rounded-full"
          //                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
          //                             alt=""
          //                           />
          //                         </div>
          //                         <div className="ml-3">
          //                           <p className="text-gray-900 whitespace-no-wrap">
          //                             Vera Carpenter
          //                           </p>
          //                         </div>
          //                       </div>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Admin
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Jan 21, 2020
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         43
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          //                         <span
          //                           aria-hidden
          //                           className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          //                         ></span>
          //                         <span className="relative">Activo</span>
          //                       </span>
          //                     </td>
          //                   </tr>
          //                   <tr>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <div className="flex items-center">
          //                         <div className="flex-shrink-0 w-10 h-10">
          //                           <img
          //                             className="w-full h-full rounded-full"
          //                             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
          //                             alt=""
          //                           />
          //                         </div>
          //                         <div className="ml-3">
          //                           <p className="text-gray-900 whitespace-no-wrap">
          //                             Blake Bowman
          //                           </p>
          //                         </div>
          //                       </div>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Editor
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Jan 01, 2020
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         77
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          //                         <span
          //                           aria-hidden
          //                           className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          //                         ></span>
          //                         <span className="relative">Activo</span>
          //                       </span>
          //                     </td>
          //                   </tr>
          //                   <tr>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <div className="flex items-center">
          //                         <div className="flex-shrink-0 w-10 h-10">
          //                           <img
          //                             className="w-full h-full rounded-full"
          //                             src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
          //                             alt=""
          //                           />
          //                         </div>
          //                         <div className="ml-3">
          //                           <p className="text-gray-900 whitespace-no-wrap">
          //                             Dana Moore
          //                           </p>
          //                         </div>
          //                       </div>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Editor
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Jan 10, 2020
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         64
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          //                       <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
          //                         <span
          //                           aria-hidden
          //                           className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
          //                         ></span>
          //                         <span className="relative">Suspended</span>
          //                       </span>
          //                     </td>
          //                   </tr>
          //                   <tr>
          //                     <td className="px-5 py-5 bg-white text-sm">
          //                       <div className="flex items-center">
          //                         <div className="flex-shrink-0 w-10 h-10">
          //                           <img
          //                             className="w-full h-full rounded-full"
          //                             src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
          //                             alt=""
          //                           />
          //                         </div>
          //                         <div className="ml-3">
          //                           <p className="text-gray-900 whitespace-no-wrap">
          //                             Alonzo Cox
          //                           </p>
          //                         </div>
          //                       </div>
          //                     </td>
          //                     <td className="px-5 py-5 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Admin
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         Jan 18, 2020
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 bg-white text-sm">
          //                       <p className="text-gray-900 whitespace-no-wrap">
          //                         70
          //                       </p>
          //                     </td>
          //                     <td className="px-5 py-5 bg-white text-sm">
          //                       <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
          //                         <span
          //                           aria-hidden
          //                           className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          //                         ></span>
          //                         <span className="relative">Inactive</span>
          //                       </span>
          //                     </td>
          //                   </tr>
          //                 </tbody>
          //               </table>
          //               <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
          //                 <span className="text-xs xs:text-sm text-gray-900">
          //                   Showing 1 to 4 of 50 Entries
          //                 </span>
          //                 <div className="inline-flex mt-2 xs:mt-0">
          //                   <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
          //                     Prev
          //                   </button>
          //                   &nbsp; &nbsp;
          //                   <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
          //                     Next
          //                   </button>
          //                 </div>
          //               </div>
          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     </section>
          //   </div>
          // </section>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Welcome, {users[auth.currentUser.uid]["name"]}
                </h1>
                <p
                  className="lg:w-1/2 w-full text-gray-500"
                  style={{ textAlign: "justify" }}
                >
                  We are so glad to have you as a donor on our platform, you are
                  doing a great service for the poor people of our society. You
                  are helping poor people with money and food to get them back
                  on their feet. We hope that you continue such amazing work in
                  the future.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <FaUserAlt />
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      {users[auth.currentUser.uid]["name"]}
                    </h2>
                    <p className="leading-relaxed text-base">
                      Email: {users[auth.currentUser.uid]["email"]}
                    </p>
                    <p className="leading-relaxed text-base">
                      Phone: {users[auth.currentUser.uid]["phone"]}
                    </p>
                  </div>
                </div>
                <div className="xl:w-2/3 md:w-1 p-4">
                  <Graph info={data} style={{ height: "194px" }} />
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
