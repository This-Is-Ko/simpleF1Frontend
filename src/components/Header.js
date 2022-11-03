import React from 'react';
import { Typography } from '@mui/material';

function Header(props) {
return (
    <header>
        <Typography variant="h4" component="div">
                <strong>Simple F1</strong>
        </Typography>
        <Typography variant="h1" component="div">
            {(props.raceInfo !== undefined) ? <strong>{props.raceInfo.name}</strong> : <strong>Grand Prix</strong>}
        </Typography>
    </header>
    );
};
export default Header;