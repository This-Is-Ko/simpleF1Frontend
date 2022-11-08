import React from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Header(props) {
return (
    <header>
        <Link className="header-link" to="/">
        <Typography component="div" sx={{ fontFamily:"'Libre Franklin', sans-serif;", typography: { sm: 'h4', xs: 'h5' }}}>
                <strong>SIMPLE F1</strong>
        </Typography>
        </Link>
        <Typography sx={{ fontFamily:"'Rubik', sans-serif;", typography: { sm: 'h1', xs: 'h3' }}}>
            {(props.raceInfo !== undefined && props.raceInfo.name !== undefined) ?
                <strong>{props.raceInfo.name}</strong>
                :
                <strong>Grand Prix Stats</strong>
            }
        </Typography>
    </header>
    );
};
export default Header;