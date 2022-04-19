import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HandleOrphanageSignupFirebase } from "../../Firebase";

export default function SignupOrphanage() {
  const [orphanageID, setID] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orpstate, setOrphanageState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [loaded, setLoaded] = useState(true);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    setLoaded(false);
    HandleOrphanageSignupFirebase(navigate, orphanageID, email, password, name, address, orpstate, phone, repeat);
    setLoaded(true);
  };

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

  // const [state, setState] = useState("");


  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
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
            <p className="text-3xl my-4">
              We aim at giving them everything they deserve.
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
                "url(https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
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
                  name="Orphanage ID"
                  placeholder="Orphanage ID"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={orphanageID}
                  required
                  onChange={(event) => setID(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Orphanage Name"
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
                  placeholder="Orphanage Contact Number"
                  value={phone}
                  required
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Orphanage Address"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={address}
                  required
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              {/* <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Orphanage State"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  value={orpstate}
                  required
                  onChange={(event) => setOrphanageState(event.target.value)}
                />
              </div> */}
              <div className="pb-2 pt-4">
                <input
                  type="search"
                  name="search"
                  placeholder="Enter state"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  list="states"
                  id="input_state"
                  onChange={(e) => {
                    setOrphanageState(e.target.value);
                  }}
                />
                <datalist id="states">
                  {states.map((state) => (
                    <option value={state} />
                  ))}
                </datalist>
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Orphanage Email"
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
                    Already Registered?
                    <Link to="/LoginOrphanage">
                      <span className="text-blue-800 "> Sign In</span>
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
