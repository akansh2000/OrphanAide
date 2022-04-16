import { Logout } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./images/logo1.png";
import { Transition } from "@headlessui/react";
import Orphanages from "./Orphanages";

export default function Dummy_dashboard() {
  // useEffect(() => {
  //   componentDidUpdate();
  // }, []);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const LogoutHelper = () => {
  //   Logout(navigate);
  // };

  // function componentDidUpdate() {
  //   window.history.pushState(null, document.title, window.location.href);
  //   window.addEventListener("popstate", function (event) {
  //     window.history.pushState(null, document.title, window.location.href);
  //   });
  // }

  const handleMusic = () => {
    // fetchOrphanages();
    Orphanages();
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
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              {/* <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              > */}
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <span
                className="text-sm font-medium"
                onClick={() => handleMusic()}
              >
                Music
              </span>
              {/* </a> */}
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-user"></i>
                </span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <div><section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
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
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/421x261"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/422x262"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/424x264"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/425x265"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/427x267"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/428x268"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section></div>
      </div>
    </>
  );
}
