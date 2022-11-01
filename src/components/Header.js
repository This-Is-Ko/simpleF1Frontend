import React from 'react';
import { Typography } from '@mui/material';

function Header(props) {
return (
    <header>
        <Typography variant="h4" component="div">
                <strong>Simple F1</strong>
        </Typography>
        <Typography variant="h1" component="div">
                <strong>{props.raceInfo.raceName}</strong>
        </Typography>
    </header>
    );
};
export default Header;