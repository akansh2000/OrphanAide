//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import Loader from "./Loader";
import Home from "./components/HomePage/Home";
import Mission from "./components/HomePage/Mission";
import Support from "./components/HomePage/Support";
import Program from "./components/HomePage/Program";
import Team from "./components/HomePage/Team";
import DonationReceipt from "./components/DonationReceipt/DonationReceipt";
import AdminDashboard from "./components/AdminDashboard";

const Login = lazy(() => import("./components/Login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const Thank = lazy(() => import("./components/Thank/Thank"));
const Payment = lazy(() => import("./components/Payment/Payment"));
const AskWhichUser = lazy(() =>
  import("./components/AskWhichUser/AskWhichUser")
);
const SpecificOrphanage = lazy(() =>
  import("./components/SpecificOrphanage/SpecificOrphanage")
);
const News = lazy(() => import("./components/News/News"));
const ReviewRequests = lazy(() =>
  import("./components/ReviewRequests/ReviewRequests")
);
const AllUsersDonation = lazy(() =>
  import("./components/AllUsersDonation/AllUsersDonation")
);
const LoginOrphanage = lazy(() => import("./components/Login/LoginOrphanage"));

const ForgotPassword = lazy(() =>
  import("./components/ForgotPassword/ForgotPassword")
);
const Dashboard = lazy(() => import("./components/Dummy_dashboard"));
const SignupOrphanage = lazy(() =>
  import("./components/Signup/SignupOrphanage.jsx")
);

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
            <Route
              exact
              path="/SignupOrphanage"
              element={<SignupOrphanage />}
            />
            <Route exact path="/AskWhichUser" element={<AskWhichUser />} />
            <Route
              exact
              path="/AllUsersDonation"
              element={<AllUsersDonation />}
            />
            <Route exact path="/Thank" element={<Thank />} />
            <Route exact path="/ReviewRequests" element={<ReviewRequests />} />
            <Route exact path="/Payment" element={<Payment />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/LoginOrphanage" element={<LoginOrphanage />} />
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
            <Route exact path="/Dashboard" element={<PrivateRoute />}>
              <Route exact path="/Dashboard" element={<AdminDashboard />} />
            </Route>
            <Route exact path="/mission" element={<Mission />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/program" element={<Program />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/donate" element={<DonationReceipt />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
