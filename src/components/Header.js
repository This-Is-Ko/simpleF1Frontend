import React from 'react';
import { Typography } from '@mui/material';
// import "typeface-archivo-black";
// require('typeface-archivo-black')

function Header(props) {
return (
    <header>
        <Typography component="div" sx={{ fontFamily:"'Libre Franklin', sans-serif;", typography: { sm: 'h4', xs: 'h5' }}}>
                <strong>SIMPLE F1</strong>
        </Typography>
        <Typography sx={{ fontFamily:"'Rubik', sans-serif;", typography: { sm: 'h1', xs: 'h3' }}}>
            {(props.raceInfo !== undefined && props.raceInfo.name !== undefined) ?
                <strong>{props.raceInfo.name}</strong>
                :
                <strong>Grand Prix</strong>
            }
        </Typography>
    </header>
    );
};
export default Header;