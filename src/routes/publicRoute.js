import { Route, Navigate } from "react-router-dom";

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
      <Navigate
        to={{
          pathname: "/",
        }}
      />
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
