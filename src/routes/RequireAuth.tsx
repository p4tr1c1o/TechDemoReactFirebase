import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { auth } from "../services/Auth.services";

interface RequireAuthProps {
    children?: JSX.Element
}


function RequireAuth({ children }: RequireAuthProps) {
    const location = useLocation();

    if (auth.currentUser) {
        return <>
            {children ? children : <Outlet />};
        </>;
    }
    return <Navigate to="/signin-side" state={{ from: location }} replace />;

}

export default RequireAuth;