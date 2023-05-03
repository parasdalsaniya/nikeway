import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../store/authContext";

const PreventWrongUrlAccess = ({ children }: { children: React.ReactNode }) => {
  const { UserData } = useAuthContext();
  const { pathname } = useLocation();
  const makeUserName = UserData?.name.split(" ").join("-");

  if (
    pathname === `/profile/${makeUserName}` ||
    pathname === `/profile/${makeUserName}/address`
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PreventWrongUrlAccess;
