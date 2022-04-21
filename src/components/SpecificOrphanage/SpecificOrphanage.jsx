import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadOrphanageTitle } from "../../Firebase";
import logo from "../images/logo1.png";
import { useState } from "react";
import { Transition } from "@headlessui/react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import { initializeApp } from "firebase/app"; //.
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref as sRef,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { getDatabase, ref, set, onValue } from "firebase/database";
import defaultOrphanageImage from "../images/defaultOrphanageImage.png";
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

export default function SpecificOrphanage() {
  const [isOpen, setIsOpen] = useState(false);

  const [img_index, setIndex] = useState(1);
  let img_arr = [];

  useEffect(() => {
    let id = localStorage.getItem("idOrphanage");
    loadOrphanageTitle(id);
    slider();
  }, []);

  async function slider() {
    let id = localStorage.getItem("idOrphanage");
    const reference = ref(db, "orphanage/" + id);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      let val = data;
      const storage = getStorage();
      const pathReference = sRef(storage, val.name);
      let t = 0;
      listAll(pathReference)
        .then((res) => {
          if (res.items.length == 0) {
            t++;
            localStorage.setItem("urlArr1", defaultOrphanageImage);
            localStorage.setItem("urlArr2", defaultOrphanageImage);
            localStorage.setItem("urlArr3", defaultOrphanageImage);
          } else {
            console.log(res);
            res.items.forEach((itemRef) => {
              console.log(itemRef);
              getDownloadURL(itemRef).then((url) => {
                t++;
                localStorage.setItem("urlArr" + t, url);
              });
            });
          }
        })
        .catch((error) => {});
    });
  }
  img_arr.push(localStorage.getItem("urlArr1"));
  img_arr.push(localStorage.getItem("urlArr2"));
  img_arr.push(localStorage.getItem("urlArr3"));

  function goBack() {
    console.log("Go back");
    if (img_index == 0) {
      setIndex(2);
    } else {
      setIndex(img_index - 1);
    }
  }

  function goNext() {
    console.log("Go next");
    if (img_index == 2) {
      setIndex(0);
    } else {
      setIndex(img_index + 1);
    }
  }

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
                    href="/Team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    Team
                  </a>

                  <a
                    href="/News"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 nav_button"
                    style={{ fontSize: "15px", letterSpacing: "3px" }}
                  >
                    News
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
                  href="/Team"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  Team
                </a>

                <a
                  href="/News"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 nav_button"
                  style={{ fontSize: "15px", letterSpacing: "3px" }}
                >
                  News
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2
                class="text-sm title-font text-gray-500 tracking-widest"
                id="orphanageState"
              >
                {" "}
              </h2>
              <h1
                class="text-gray-900 text-3xl title-font font-medium mb-4"
                id="orphanageName"
              >
                {" "}
              </h1>
              <div class="flex mb-4">
                {/* <a href="#" class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"> </a> */}
              </div>
              {/* <p class="leading-relaxed mb-4" >Address: C-5/10, Tata Steel Officers Enclave, Beta -1, Greater Noida
                    </p> */}
              <div class="flex border-gray-200 py-2">
                <span class="text-gray-500">Address</span>
                <span
                  class="ml-auto text-gray-900"
                  id="addressOrphanage"
                ></span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Contact No.</span>
                <span
                  class="ml-auto text-gray-900"
                  id="contactnoOrphanage"
                ></span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">No. of Children</span>
                <span
                  class="ml-auto text-gray-900"
                  id="noofchildrenOrphanage"
                ></span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Current Status</span>
                <span
                  class="ml-auto text-gray-900"
                  id="currentstatusOrphanage"
                ></span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Founder</span>
                <span
                  class="ml-auto text-gray-900"
                  id="founderOrphanage"
                ></span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Founded</span>
                <span
                  class="ml-auto text-gray-900"
                  id="foundedOrphanage"
                ></span>
              </div>
              <Link to="/Payment">
                <div className="flex">
                  <span
                    class="title-font font-medium text-2xl text-gray-900"
                    id="donationrecieved"
                  >
                    Donation Recieved:{" "}
                  </span>
                  <button
                    class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    id="Donate"
                  >
                    Donate
                  </button>
                </div>
              </Link>
            </div>
            <div
              className="container lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded my-auto"
              style={{ position: "relative" }}
            >
              <img
                alt="LOADING..."
                class="lg:w-full w-full lg:h-auto h-64 object-cover object-center rounded"
                src={img_arr[img_index]}
                id="imageOrphanage"
              />
              {console.log(img_arr)}
              <div
                className="flex items-center"
                style={{
                  position: "absolute",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "flex-start",
                  top: "50%",
                }}
              >
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <GrPrevious
                      onClick={() => goBack()}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
                <div className="font-medium text-gray-800">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <GrNext
                      onClick={() => goNext()}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {console.log(img_arr)}
          </div>
        </div>
      </section>
      <footer
        className="text-gray-600 body-font ml-3 mr-3"
        style={{ backgroundColor: "#ededed" }}
      >
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              style={{ width: "4rem", height: "4rem" }}
              src={logo}
              alt="Workflow"
            />
            <span className="ml-3 text-xl">OrphanAide</span>
          </div>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} OrphanAide — India Charity Registration
            Number: 1155123 | Registered with the Charities Aid Foundation |
            <a
              href="https://www.termsandconditionsgenerator.com/live.php?token=TcZkfHf8Qh7ZlwPa7lPGMhHrN0wOnlMN"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Terms & Conditions
            </a>{" "}
            |
            <a
              href="https://www.freeprivacypolicy.com/live/a6ef4836-e951-4921-b707-464d7f2d2b03"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
