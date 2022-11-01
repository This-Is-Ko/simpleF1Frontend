import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { WiDaySunny } from 'weather-icons-react';

function Highlights(props) {
    return (
        <Card sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Highlights</strong>
            </Typography>
            <CardContent>
                <iframe 
                    src={props.raceHighlights.link}
                    title="race highlights">
                </iframe>
            </CardContent>
        </Card>
    )
}

export default Highlights;