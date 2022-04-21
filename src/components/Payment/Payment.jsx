import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import logo from "../images/logo1.png";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const stripePromise = loadStripe("pk_test_51KmMwwSIFcN2pZvQ1v7L1NwYFuUtKFVmpZvIEAXPy2ehjeXVMBPxKmeBuMEjoxTXgvR8sKpVrFdlYBhT1OjExN2600oR1fj3AL");
const DonationButton = ({ itemID, amount }) => {
  const handleClick = async (event) => {
    localStorage.setItem("amount", parseInt(amount));
    amount = parseInt(amount);
    const stripe = await stripePromise;
    stripe
      .redirectToCheckout({
        lineItems: [{ price: itemID, quantity: 1 }],
        mode: "payment",
        successUrl: "http://localhost:3000/Thank",
        cancelUrl: "http://localhost:3000/SpecificOrphanage",
        submitType: "donate",
      })
      .then(function (result) {
        if (result.error) {
          console.log(result);
        }
      });
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      onClick={handleClick}
    >
      Donate
    </button>
  );
};
export default function Payment() {
  const [isOpen, setIsOpen] = useState(false);
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
        <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">DONATION</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Help a child get an education!</p>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">₹10.00</h1>
            <DonationButton  class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
            amount={10}
            itemID="price_1KmcafSIFcN2pZvQAz3wzDio"
            ></DonationButton>
            </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹50.00
                </h1>
                <DonationButton
                  amount={50}
                  itemID="price_1KmbfrSIFcN2pZvQ4gJSqVwe"
                ></DonationButton>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹100.00
                </h1>
                <DonationButton
                  amount={100}
                  itemID="price_1KmcbqSIFcN2pZvQlD7j7iqF"
                ></DonationButton>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹500.00
                </h1>
                <DonationButton
                  amount={500}
                  itemID="price_1Kmcc6SIFcN2pZvQZZ66YqKq"
                ></DonationButton>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹1000.00
                </h1>
                <DonationButton
                  amount={1000}
                  itemID="price_1KmccOSIFcN2pZvQuMNTAEoY"
                ></DonationButton>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹2000.00
                </h1>
                <DonationButton
                  amount={2000}
                  itemID="price_1KmcchSIFcN2pZvQJoYfsXiH"
                ></DonationButton>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹5000.00
                </h1>
                <DonationButton
                  amount={5000}
                  itemID="price_1Kmcd7SIFcN2pZvQvkwAmgTC"
                ></DonationButton>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹10000.00
                </h1>
                <DonationButton
                  class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                  amount={10000}
                  itemID="price_1KmcdWSIFcN2pZvQlMPD7xhH"
                ></DonationButton>
              </div>
            </div>
          </div>
        </div>
    </section>
    <footer
          className="text-gray-600 body-font ml-3 mr-3 bottom-0"
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
              © {new Date().getFullYear()} OrphanAide — India Charity
              Registration Number: 1155123 | Registered with the Charities Aid
              Foundation |
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
