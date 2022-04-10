//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import Loader from "./Loader";
import Home from "./components/HomePage/Home";
import Mission from "./components/HomePage/Mission";
import Support from "./components/HomePage/Support";
import Program from "./components/HomePage/Program";

const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Dashboard = lazy(() => import("./components/Dummy_dashboard"));

function App() {
  // useEffect(() => {
  //   localStorage.removeItem("Bearer");
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<PublicRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
            {/* <Route exact path="/" element={<Login />} /> */}
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Dashboard" element={<PrivateRoute />}>
              <Route exact path="/Dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/mission" element={<Mission />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/program" element={<Program />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
