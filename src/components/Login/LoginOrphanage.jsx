
import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
// import { update } from "../../automation";

import { HandleLoginFirebaseOrphanage} from "../../Firebase";

export default function LoginOrphanage() {
  const [orphanageID, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(true);

  const navigate = useNavigate();

  const handleOrphanageLogin = (e) => {
    e.preventDefault();
    setLoaded(false);

    HandleLoginFirebaseOrphanage(navigate, orphanageID, email, password);

    setEmail("");
    setPassword("");
  };

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
            <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="orphanageID"
                  id="orphanageID"
                  placeholder="Orphanage ID"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={orphanageID}
                  onChange={(event) => setID(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100 mt-5 mb-16">
                <a href="/ForgotPassword">Forgot your password?</a>
              </div>
              <div className="px-4 pb-2 pt-4">
                {loaded ? (
                  <button
                    type="submit"
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                    onClick={handleOrphanageLogin}
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                  >
                    <div className="text-center mx-auto">
                      <div
                        style={{ borderTopColor: "transparent" }}
                        className="w-8 h-8 border-4 border-black-400 border-dotted rounded-full animate-spin text-center mx-auto"
                      ></div>
                    </div>
                  </button>
                )}
              </div>
              <Link to="/SignupOrphanage">
                <div className="px-4 pb-2 pt-4">
                  <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                    Register
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
