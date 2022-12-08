import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { auth } from "../services/Auth.services";

interface RequireAuthProps {
    children?: JSX.Element
}


function RequireAuth({ children }: RequireAuthProps) {
    const location = useLocation();
    console.log(auth.currentUser ?? "pepino");

    if (auth.currentUser) {
        return <>
            {children ? children : <Outlet />};
            {/* <div> pepex</div>; */}
        </>;
    }
    // return <Navigate to="/signin-side" state={{ from: location }} replace />;
    return <div> pepe</div>;
}

export default RequireAuth;