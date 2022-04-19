import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import image9 from "../images/image9.jpg";
import logo from "../images/logo1.png";

const Program = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800  sticky top-0 z-50">
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

                <a
                  href="/AskWhichUser"
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
        <div
          className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4"
          style={{ marginTop: "2rem" }}
        >
          <img
            alt="content"
            className="object-cover object-center h-full w-full block absolute inset-0"
            src={image9}
            style={{ opacity: "0.60" }}
          />
          <div className="text-center relative z-10 w-full">
            <h1
              className="text-gray-900 font-semibold title-font mb-2"
              style={{ fontSize: "xxx-large", letterSpacing: "3px" }}
            >
              UNIQUE
            </h1>
            <p
              className="text-gray-900 font-bold"
              style={{ fontSize: "x-large", letterSpacing: "3px" }}
            >
              WHAT MAKES ORPHANAIDE SO SPECIAL?
            </p>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2
                  className="text-lg text-gray-900 font-medium title-font mb-2"
                  style={{ letterSpacing: "2px" }}
                >
                  DISPARATE
                </h2>
                <p style={{ fontSize: "18px", textAlign: "justify" }}>
                  Independent platform where donors can view all orphanages,
                  search for them based on their cities, and donate to the
                  orphanage of their choice.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2
                  className="text-lg text-gray-900 font-medium title-font mb-2"
                  style={{ letterSpacing: "2px" }}
                >
                  EASY
                </h2>
                <p style={{ fontSize: "18px", textAlign: "justify" }}>
                  Easy and seamless interface considering donors of any age
                  group. No technical knowledge needed for using OrphanAide.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2
                  className="text-lg text-gray-900 font-medium title-font mb-2"
                  style={{ letterSpacing: "2px" }}
                >
                  SECURE
                </h2>
                <p style={{ fontSize: "18px", textAlign: "justify" }}>
                  All the details and transactions of the donor are secure and
                  safe. Success receipt is also provided after successful
                  donation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-gray-600 body-font"
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
};

export default Program;
