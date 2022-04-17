
import { React } from "react";

import { Link } from "react-router-dom";

export default function AskWhichUser() {

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden  bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1
              className="text-5xl font-bold text-left tracking-wide"
              style={{ fontWeight: "500", fontSize: "3.5rem" }}
            >
              All for a Smile
            </h1>
            <p
              className="text-3xl my-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We aim at giving them everything they deserve.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{
            backgroundColor: "#161616",
          }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1
              className="my-6 text-7xl mb-20"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              OrphanAide
            </h1>
            
            <Link to="/Login">
              <div className="px-4 pb-2 pt-4" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <button
                    type="submit"
                    className="uppercase block w-2/3 p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                  >
                    Sign In as a User
                  </button>

              </div>
            </Link>
              <Link to="/LoginOrphanage">
                <div className="px-4 pb-2 pt-4"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <button className="uppercase block w-2/3 p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                    Sign In as a Orphanage
                  </button>
                </div>
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
