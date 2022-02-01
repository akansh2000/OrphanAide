//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  // useEffect(
  //   () => registerWithEmailAndPassword("ps827@snu.edu.in", "kuru!@#12"),
  //   []
  // );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
