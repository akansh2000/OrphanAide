import { Route, Navigate } from "react-router-dom";
import Dummy_dashboard from "../components/Dummy_dashboard";
import { FetchToken } from "../Firebase";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import AdminDashboard from "../components/AdminDashboard";
import { Dashboard } from "@mui/icons-material";

const firebaseConfig = {
  //.
  apiKey: "AIzaSyCjepQRClsAeuzbjyQnkW8mYed1oOFbG-4",
  authDomain: "orphanaide.firebaseapp.com",
  projectId: "orphanaide",
  storageBucket: "orphanaide.appspot.com",
  messagingSenderId: "42815706163",
  appId: "1:42815706163:web:e539dab75415ba72cbff46",
  measurementId: "G-H99B1MH0CT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

// https://dev.to/nilanth/how-to-create-public-and-private-routes-using-react-router-72m

const PrivateRoute = () => {
  FetchToken();
  // <FetchToken />;
  console.log("Inside Private Route");
  const token = localStorage.getItem("Bearer");
  return (
    // <Route
    //   {...rest}
    //   render={({ location }) =>
    //     token ? (
    //       children
    //     ) : (
    //       <Navigate
    //         to={{
    //           pathname: "/Login",
    //           state: { from: location },
    //         }}
    //       />
    //     )
    //   }
    // />
    token ? (
      localStorage.getItem("isAdmin") === "yes" ? (
        <AdminDashboard />
      ) : (
        <Dummy_dashboard />
      )
    ) : (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
    )
  );
};

export default PrivateRoute;
