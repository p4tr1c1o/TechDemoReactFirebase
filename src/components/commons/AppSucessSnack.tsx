import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";


function AppSucessSnack({ handleClose }) {
    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                This is a success message!
            </Alert>
        </Snackbar>
    );
}

export default AppSucessSnack;
