import React from 'react';
import { Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { Link } from "react-router-dom";

function Footer(props) {
return (
    <footer>
        <Typography sx={{ color:"grey" }} variant="caption" component="div">
            <Link className="footer-links" to="/">Simple F1</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link className="footer-links" to="/about">About</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <MuiLink sx={{ color:"grey" }} variant="caption" underline="none" href={"mailto:" + process.env.REACT_APP_CONTACT_EMAIL}>Contact</MuiLink>
        </Typography>
        <Typography sx={{ color:"grey", paddingBottom:"5px" }} variant="caption" component="div">
            All images belong to their rightful owners
        </Typography>
    </footer>
    );
};
export default Footer;