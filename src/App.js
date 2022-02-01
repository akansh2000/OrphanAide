//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import Loader from "./Loader";

// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Dummy_dashboard from "./components/dummy_dashboard";
const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Dashboard = lazy(() => import("./components/Dummy_dashboard"));

function App() {
  // useEffect(
  //   () => registerWithEmailAndPassword("ps827@snu.edu.in", "kuru!@#12"),
  //   []
  // );

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Dashboard" element={<PrivateRoute />}>
              <Route exact path="/Dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
