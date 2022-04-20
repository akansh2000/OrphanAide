import React, { useState, useEffect } from "react";
import logo from "../images/logo1.png";
import { Transition } from "@headlessui/react";
import Aditya from "../images/Aditya.jpeg";
import Akansh from "../images/Akansh.jpg";
import Prabhat from "../images/Prabhat.jpg";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 ml-3 mr-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center mx-auto"
              style={{ width: "100%", justifyContent: "space-between" }}
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
                    href="/team"
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

                  <a
                    href="/AskWhichUser"
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
                  href="/team"
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Akansh}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Akansh Mittal
                  </h2>
                  <h3 className="text-gray-500 mb-3">Developer</h3>
                  <p className="mb-4">Email: am973@snu.edu.in</p>
                  <p className="mb-4">Contact: +91 9119013425</p>
                  <span className="inline-flex">
                    <a
                      className="ml-2 text-gray-500"
                      href="mailto:am973@snu.edu.in"
                      target="_blank"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Aditya}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Aditya Srivastava
                  </h2>
                  <h3 className="text-gray-500 mb-3">Designer</h3>
                  <p className="mb-4">Email: as369@snu.edu.in</p>
                  <p className="mb-4">Contact: +91 8826030648</p>
                  <span className="inline-flex">
                    <a
                      className="ml-2 text-gray-500"
                      href="mailto:as369@snu.edu.in"
                      target="_blank"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={Prabhat}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Prabhat Kumar Singh Gaur
                  </h2>
                  <h3 className="text-gray-500 mb-3">Tester</h3>
                  <p className="mb-4">Email: ps827@snu.edu.in</p>
                  <p className="mb-4">Contact: +91 7985378809</p>
                  <span className="inline-flex">
                    <a
                      className="ml-2 text-gray-500"
                      href="mailto:ps827@snu.edu.in"
                      target="_blank"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
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
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Terms & Conditions
            </a>{" "}
            |
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              Privacy Policy
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Team;
