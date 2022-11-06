import React from 'react';
import { Typography, Link } from '@mui/material';

function Footer(props) {
return (
    <footer>
        <Typography sx={{ color:"grey" }} variant="caption" component="div">
                All images belong to their rightful owners&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link sx={{ color:"grey" }} variant="caption" underline="none" href={"mailto:" + process.env.REACT_APP_CONTACT_EMAIL}>Contact</Link>
        </Typography>
    </footer>
    );
};
export default Footer;