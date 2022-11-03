import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Highlights(props) {
    return (
        <Card sx={{ minWidth: 350, boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Highlights</strong>
            </Typography>
            <CardContent>
                {("link" in props.raceHighlights) ?
                    <iframe
                        src={props.raceHighlights.link}
                        title="race highlights">
                    </iframe>
                    :
                    <iframe
                        src="#"
                        title="race highlights">
                    </iframe>
                }
            </CardContent>
        </Card>
    )
}

export default Highlights;