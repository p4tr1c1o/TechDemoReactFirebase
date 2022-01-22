import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
    return (
        <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
            <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{" "}
                {new Date().getFullYear()}.
            </Typography>
        </Box>
    );
}

export default Footer;