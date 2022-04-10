//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import PrivateRoute from "./routes/privateRoute";
// import PublicRoute from "./routes/publicRoute";
import Loader from "./Loader";

// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Dummy_dashboard from "./components/dummy_dashboard";
const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Thank = lazy(() => import("./components/Thank/Thank"));
const Payment = lazy(() => import("./components/Payment/Payment"));
const SpecificOrphanage = lazy(() =>
  import("./components/SpecificOrphanage/SpecificOrphanage")
);
const News = lazy(() => import("./components/News/News"));
const ForgotPassword = lazy(() =>
  import("./components/ForgotPassword/ForgotPassword")
);
const Dashboard = lazy(() => import("./components/Dummy_dashboard"));

function App() {
  useEffect(() => {
    localStorage.removeItem("Bearer");
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Thank" element={<Thank />} />
            <Route exact path="/Payment" element={<Payment />} />
            <Route exact path="/Login" element={<Login />} />
            <Route
              exact
              path="/SpecificOrphanage"
              element={<SpecificOrphanage />}
            />
            <Route exact path="/News" element={<News />} />
            <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
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
