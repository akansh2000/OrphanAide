import { Route, Navigate } from "react-router-dom";
import Dummy_dashboard from "../components/Dummy_dashboard";
import { FetchToken } from "../Firebase";

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
      <Dummy_dashboard />
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
