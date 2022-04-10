import { Route, Navigate } from "react-router-dom";
import Home from "../components/HomePage/Home";

const PublicRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("Bearer");
  return (
    // <Route
    //   {...rest}
    //   render={({ location }) =>
    //     !token ? (
    //       children
    //     ) : (
    //       <Navigate
    //         to={{
    //           pathname: "/Dashboard",
    //           state: { from: location },
    //         }}
    //       />
    //     )
    //   }
    // />

    !token ? (
      <Home />
    ) : (
      <Navigate
        to={{
          pathname: "/Dashboard",
        }}
      />
    )
  );
};

export default PublicRoute;
