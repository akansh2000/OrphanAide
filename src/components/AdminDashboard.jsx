import {
  Logout,
  loadDashboardOrphanage,
  loadReviewRequest,
  allUserDonationDetails,
  acceptOrphanage,
  rejectOrphanage,
} from "../Firebase";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import logo from "./images/logo1.png";
import { Transition } from "@headlessui/react";
import { GiMagnifyingGlass } from "react-icons/gi";

const AdminDashboard = () => {
  useEffect(() => {
    componentDidUpdate();
    if (localStorage.getItem("acceptState") != null) {
      acceptOrphanage(navigate, localStorage.getItem("acceptState"));
      localStorage.removeItem("acceptState");
      setReview(1);
      setDonation(0);
      setOrphanages(0);
    }

    if (localStorage.getItem("rejectState") != null) {
      rejectOrphanage(localStorage.getItem("rejectState"));
      localStorage.removeItem("rejectState");
      setReview(1);
      setDonation(0);
      setOrphanages(0);
    }
  }, []);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [orphanages, setOrphanages] = useState(1);
  const [ReviewRequests, setReview] = useState(0);
  const [donationData, setDonation] = useState(0);
  let states = [
    "Andaman and Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [state, setState] = useState("");

  const showOrphanages = () => {
    setOrphanages(1);
    setReview(0);
    setDonation(0);
    loadDashboardOrphanage();
  };

  function donationDataFunc() {
    setOrphanages(0);
    setDonation(1);
    setReview(0);
    allUserDonationDetails();
  }

  function orphanageReviewRequests() {
    setOrphanages(0);
    setDonation(0);
    setReview(1);
    // setTimeout(function () {
    loadReviewRequest();
    // }, 3000);
  }

  function componentDidUpdate() {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
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
                  <div className="relative text-gray-600">
                    <input
                      type="search"
                      name="search"
                      placeholder="Enter state"
                      className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                      list="states"
                      id="input_state"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                    <datalist id="states">
                      {states.map((state) => (
                        <option value={state} />
                      ))}
                    </datalist>
                    <button
                      className="absolute right-0 top-0 mr-4"
                      style={{ marginTop: "10px" }}
                      onClick={() => {
                        loadDashboardOrphanage(state);
                      }}
                    >
                      <GiMagnifyingGlass
                        style={{ width: "1.5rem", height: "1.5rem" }}
                      />
                    </button>
                  </div>
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
                <div className="relative text-gray-600">
                  <input
                    name="search_min"
                    placeholder="Enter state"
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                    list="states_min"
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                  <datalist id="states_min">
                    {states.map((state) => (
                      <option value={state} />
                    ))}
                  </datalist>
                  <button
                    className="absolute right-0 top-0 my-auto mr-4"
                    onClick={() => {
                      loadDashboardOrphanage(state);
                    }}
                  >
                    <GiMagnifyingGlass
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        color: "yellowgreen",
                      }}
                    />
                  </button>
                </div>
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
          <ul className="flex flex-col py-4" style={{ marginTop: "5rem" }}>
            <li>
              {orphanages == 1 ? (
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
                    showOrphanages();
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
                    showOrphanages();
                  }}
                >
                  {" "}
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Orphanages
                  </span>
                </button>
              )}
            </li>
            <li style={{ marginTop: "1rem" }}>
              {ReviewRequests == 1 ? (
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
                    orphanageReviewRequests();
                  }}
                >
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Requests
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
                    // setOrphanages(0);
                    // setReviewRequests(1);
                    orphanageReviewRequests();
                  }}
                >
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Requests
                  </span>
                </button>
              )}
            </li>

            <li style={{ marginTop: "1rem" }}>
              {donationData == 1 ? (
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
                    // setOrphanages(0);
                    // setReviewRequests(1);
                    donationDataFunc();
                  }}
                >
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Donations
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
                    // setOrphanages(0);
                    // setReviewRequests(1);
                    donationDataFunc();
                  }}
                >
                  <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                    Donations
                  </span>
                </button>
              )}
            </li>

            <li style={{ marginTop: "1rem" }}>
              <button
                className="flex flex-row items-center transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-800"
                style={{
                  height: "3rem",
                  width: "130px",
                  marginLeft: "2rem",
                  paddingLeft: "1rem",
                }}
                onClick={() => {
                  // setOrphanages(0);
                  // setReviewRequests(1);
                  Logout(navigate);
                }}
              >
                <span style={{ fontSize: "15px", letterSpacing: "2px" }}>
                  Log Out
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
                <div className="flex flex-wrap -m-4" id="orphanage_cards"></div>
              </div>
            </section>
          </div>
        ) : (
          ""
        )}
        {donationData == 1 ? (
          <>
            <section className="text-gray-600 body-font w-full h-screen">
              <div className="bg-white p-8 rounded-md w-full h-screen">
                <div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <div className=" flex items-center justify-center text-center w-full">
                        <div>
                          <h1 className="text-gray-60 font-semibold text-xl">
                            Users' Donations
                          </h1>
                          <span className="text-s">
                            All donations through this platform till now
                          </span>
                        </div>
                      </div>
                      <table className="w-full mt-7">
                        <thead>
                          <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Users' Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Donated Amount
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Latest Donation Time
                            </th>
                          </tr>
                        </thead>
                        <tbody id="table-dataUser"></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          ""
        )}
        {ReviewRequests == 1 ? (
          <>
            <section class="container mx-auto p-6 font-mono">
              <div class="w-full mb-8 rounded-lg shadow-lg">
                <div class="w-full">
                  <div className="w-full text-center text-lg">
                    <h1>Orphanages Pending Requests</h1>
                  </div>
                  <table class="w-full mt-5">
                    <thead>
                      <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th class="px-4 py-3">ID</th>
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3">Email</th>
                        <th class="px-4 py-3">Address</th>
                        <th class="px-4 py-3">State</th>
                        <th class="px-4 py-3">Phone</th>
                        <th class="px-4 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white" id="tableReviewRequest"></tbody>
                  </table>
                </div>
              </div>
            </section>
          </>
        ) : (
          " "
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
