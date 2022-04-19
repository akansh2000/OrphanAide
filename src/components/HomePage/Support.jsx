import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image10 from "../images/image10.jpg";  
import logo from "../images/logo1.png";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-50">
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
            src={image10}
            style={{ opacity: "0.60" }}
          />
          <div className="text-center relative z-10 w-full">
            <h1
              className="text-gray-900 font-semibold title-font mb-2"
              style={{ fontSize: "xxx-large", letterSpacing: "3px" }}
            >
              DONATE
            </h1>
            <p
              className="text-gray-900 font-bold"
              style={{ fontSize: "x-large", letterSpacing: "3px" }}
            >
              BRING HOPE TO THE ORPHANS
            </p>
          </div>
        </div>
        <div
          className="container mx-auto flex py-24 md:flex-row flex-col items-center"
          style={{ paddingRight: "4.25rem", paddingLeft: "4.25rem" }}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              style={{ letterSpacing: "3px" }}
            >
              FOCUS
            </h1>
            <p
              className="mb-8"
              style={{ textAlign: "justify", lineHeight: "30px" }}
            >
              OrphanAide focuses on benefitting the children in the orphanages. It is built with the purpose of giving each child an equal opportunity in this world. 
              By donating to orphanages, you're not only helping the children in need, but also contributing to the future of your country. At OrphanAide, we give people the ability to donate directly to orphanages and 
              relief efforts. We think you small donation can make these children go a long way.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={image11}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex py-24 md:flex-row flex-col items-center"
          style={{ paddingLeft: "4.25rem", paddingRight: "4.25rem" }}
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={image12}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              style={{ letterSpacing: "3px" }}
            >
              COMMUNITY
            </h1>
            <p
              className="mb-8"
              style={{ textAlign: "justify", lineHeight: "30px" }}
            >

              OrphanAide thinks that community is the most important part of our project. We are happy to bring money and help to orphans who need it.
              With a donation to an orphanage, you are helping children who would otherwise have no opportunity in life.
              In addition, the orphanages offer great opportunities for tourists to see what is going on inside and give back to these wonderful children.

            </p>
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

export default Support;
