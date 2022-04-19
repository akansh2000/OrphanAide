import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import logo from "../images/logo1.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image6 from "../images/image6.jpg";
import image5 from "../images/image5.jpeg";
import { getOrphanageDataProfile } from "../../Firebase";
import { send } from 'emailjs-com';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_htvdgkr',
      'template_k7fshh8',
      toSend,
      '7njiqsileUfeKGxNo'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      
      setToSend({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("Orphanage Name", "Mother teresas home");
    let name = localStorage.getItem("Orphanage Name");
    getOrphanageDataProfile(name);
  }, []);

  return (
    <>
      <div>
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

        <main>
          {/* Gallery blog starts */}

          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                    Help a child achieve their dreams by donating to OrphanAide
                  </h1>
                  <p
                    className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Our goal is to make it easier for people to donate to
                    orphanages that provide food, shelter, medical care,
                    educational assistance, adoption advocacy, and other
                    services in a way that breaks the cycle of dependency and
                    promotes individual and societal productivity as well as
                    charitable character in the community.
                  </p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src={image3}
                      />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src={image5}
                      />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                      <img
                        alt="gallery"
                        className="w-full h-full object-cover object-center block"
                        src={image2}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-full">
                      <img
                        alt="gallery"
                        className="w-full h-full object-cover object-center block"
                        src={image1}
                      />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src={image6}
                      />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src={image4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div> */}
          </div>

          {/* Feature blogs start */}

          <section
            className="text-gray-600 body-font ml-3 mr-3"
            style={{ backgroundColor: "#ededed" }}
          >
            <div className="container px-5 py-24 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
                GETTING PEOPLE OUT OF POVERTY
                <br />
                <br className="hidden sm:block" />
                Rooted in hope for the future
              </h1>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <RiHomeHeartFill
                      style={{ width: "2rem", height: "2rem" }}
                    ></RiHomeHeartFill>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2
                      className="text-gray-900 text-lg title-font font-medium mb-2 "
                      style={{ letterSpacing: "4px" }}
                    >
                      OUR MISSION
                    </h2>
                    <p className="leading-relaxed text-base">
                      OrphanAide explores the ways free of poverty, where
                      everyone has the freedom and chances to seek happiness and
                      reach their full potential.
                    </p>
                    <a
                      className="mt-3 text-indigo-500 inline-flex items-center"
                      style={{ cursor: "pointer" }}
                      href="/mission"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <FaDonate
                      style={{ width: "2rem", height: "2rem" }}
                    ></FaDonate>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2
                      className="text-gray-900 text-lg title-font font-medium mb-2"
                      style={{ letterSpacing: "4px" }}
                    >
                      YOUR SUPPORT
                    </h2>
                    <p className="leading-relaxed text-base">
                      Donating to OrphanAide is simple, and every contribution
                      counts. All of our donors have been extremely generous.
                    </p>
                    <a
                      className="mt-3 text-indigo-500 inline-flex items-center"
                      style={{ cursor: "pointer" }}
                      href="/support"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 flex">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                    <GiLovers
                      style={{ width: "2rem", height: "2rem" }}
                    ></GiLovers>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2
                      className="text-gray-900 text-lg title-font font-medium mb-2"
                      style={{ letterSpacing: "4px" }}
                    >
                      OUR PROGRAM
                    </h2>
                    <p className="leading-relaxed text-base">
                      OrphanAide believes in development rather than assistance,
                      because development at the grassroots level helps
                      individuals to realise their own potential and break the
                      poverty cycle.
                    </p>
                    <a
                      className="mt-3 text-indigo-500 inline-flex items-center"
                      style={{ cursor: "pointer" }}
                      href="/program"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <section
          className="text-gray-600 body-font relative ml-3 mr-3"
          style={{ backgroundColor: "yellowgreen" }}
        >
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14021.728316462564!2d77.575363!3d28.5267298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x321412756718874c!2sShiv%20Nadar%20University!5e0!3m2!1sen!2sin!4v1649311534911!5m2!1sen!2sin"
                style={{ opacity: "0.6" }}
              ></iframe>
              <div
                className="relative flex flex-wrap py-6 rounded shadow-md mx-auto"
                style={{ backgroundColor: "ghostwhite" }}
              >
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Shiv Nadar University NH - 91, Tehsil Dadri Gautam Buddha
                    Nagar Uttar Pradesh - 201314
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                  teamOA@OrphanAide.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+91- 9119013425</p>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
              style={{ backgroundColor: "yellowgreen" }}
            >
              <h3
                className="text-gray-900 mb-1 font-medium title-font"
                style={{ fontSize: "25px", letterSpacing: "2px" }}
              >
                Get in Touch with Us
              </h3>
              <p className="leading-relaxed mb-5 text-gray-900">
                Please contact us on teamOA@OrphanAide.com, or use the form
                below to submit an enquiry:
              </p>
              <form onSubmit={onSubmit}>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-900">
                  Name
                </label>
                <input
                  type='text'
                  name='from_name'
                  value={toSend.from_name}
                  onChange={handleChange}
                  style={{ backgroundColor: "#f7f9f1" }}
                  className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-900">
                  Email
                </label>
                <input
                   type='text'
                   name='reply_to'
                   value={toSend.reply_to}
                   onChange={handleChange}
                  style={{ backgroundColor: "#f7f9f1" }}
                  className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-900"
                >
                  Message
                </label>
                <textarea
                   type='text'
                   name='message'
                   value={toSend.message}
                   onChange={handleChange}
                  style={{ backgroundColor: "#f7f9f1" }}
                  className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </form>
            </div>
          </div>
        </section>

        {/* Footer starts */}

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
      </div>
    </>
  );
};

export default Home;
