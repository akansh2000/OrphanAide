import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// import "../";
// import "./styles/tailwind-pre-build.css";
const stripePromise = loadStripe(
  "pk_test_51KmMwwSIFcN2pZvQ1v7L1NwYFuUtKFVmpZvIEAXPy2ehjeXVMBPxKmeBuMEjoxTXgvR8sKpVrFdlYBhT1OjExN2600oR1fj3AL"
);
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
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              DONATION
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Donate All Your Money!
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  ₹10.00
                </h1>
                <DonationButton
                  class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
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
    </>
  );
}
