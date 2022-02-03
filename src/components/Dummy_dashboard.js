import { Logout } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Dummy_dashboard() {
  useEffect(() => {
    componentDidUpdate();
  }, []);
  const navigate = useNavigate();

  const LogoutHelper = () => {
    Logout(navigate);
  };

  function componentDidUpdate() {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
  }

  return (
    <>
      <h1>Welcome to dashboard</h1>
      <button onClick={LogoutHelper}>Sign out</button>
    </>
  );
}
