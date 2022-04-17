import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { donationToOrphanage } from "../../Firebase";

export default function Dummy_dashboard() {
  const navigate = useNavigate();

  setTimeout(function () {
    navigate("/Dashboard");
  }, 5000);

  useEffect(() => {
    let amount = localStorage.getItem("amount");
    donationToOrphanage(amount);
    localStorage.removeItem("amount");
  }, []);

  return (
    <>
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden  bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/550x/98/c6/9a/98c69a66353a76217b371490bd085528.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1
              className="text-5xl font-bold text-left tracking-wide"
              style={{ fontWeight: "500", fontSize: "3.5rem" }}
            >
              Bringing Happiness!
            </h1>
            <p
              className="text-3xl my-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Your donation will help in creating a bright future. Hope you have
              a nice day!
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
                "url(https://images.squarespace-cdn.com/content/v1/5005cf7684ae9eec4f9d1861/1518547038540-R8GB0LAXMIV2HJDHRX1F/team.jpg?format=1000w)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1
              className="my-10 text-9xl mb-20"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Thank You!
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
