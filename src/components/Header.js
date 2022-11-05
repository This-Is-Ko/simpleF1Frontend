import React from 'react';
import { Typography } from '@mui/material';
// import "typeface-archivo-black";
// require('typeface-archivo-black')

function Header(props) {
return (
    <header>
        <Typography variant="h4" component="div" sx={{ fontFamily:"'Libre Franklin', sans-serif;"}}>
                <strong>SIMPLE F1</strong>
        </Typography>
        <Typography variant="h1" component="div" sx={{ fontFamily:"'Rubik', sans-serif;"}}>
            {(props.raceInfo !== undefined) ? <strong>{props.raceInfo.name}</strong> : <strong>Grand Prix</strong>}
        </Typography>
    </header>
    );
};
export default Header;