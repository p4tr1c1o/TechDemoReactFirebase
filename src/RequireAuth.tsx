import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "./services/Auth.services";


function RequireAuth({ children }: { children: JSX.Element }) {
    const location = useLocation();

    console.log("auth.currentUser", auth.currentUser);

    if (auth.currentUser) {
        return children;
    }
    return <Navigate to="/signin-side" state={{ from: location }} replace />;

}

export default RequireAuth;