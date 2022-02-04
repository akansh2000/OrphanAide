import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HandleSignupFirebase } from "../../Firebase";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [loaded, setLoaded] = useState(true);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    setLoaded(false);
    HandleSignupFirebase(navigate, email, password, name, phone, repeat);
    // const signString = localStorage.getItem("SignedIn");
    // if(signString.length === 4){
    //   emptyField();
    // }
  };

  // function emptyField() {
  //   setName("");
  //   setPhone("");
  //   setEmail("");
  //   setPassword("");
  //   setRepeat("");
  // }

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 text-7xl lg:text-5xl md:text-base">
              OrphanAide
            </h1>
            <form
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              onSubmit={handleSignup}
            >
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={name}
                  required
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={phone}
                  required
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={email}
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={repeat}
                  required
                  onChange={(event) => setRepeat(event.target.value)}
                />
              </div>
              <div className="px-4 pb-2 pt-4">
                {loaded ? (
                  <button
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                    type="submit"
                  >
                    Register
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

                <div className="px-4 pb-2 pt-4 text-center text-lg">
                  <p>
                    Already a customer?
                    <Link to="../Login">
                      <span className="text-blue-800 "> Sign Up!</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
