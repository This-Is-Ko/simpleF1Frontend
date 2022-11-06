import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Highlights(props) {
    return (
        <Card sx={{ minWidth: 350, boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Highlights</strong>
            </Typography>
            <CardContent>
                {("uri" in props.raceHighlights && props.raceHighlights.uri !== "") ?
                    <iframe
                        className='highlights-iframe'
                        src={props.raceHighlights.uri}
                        title="race highlights">
                    </iframe>
                    :
                    <Typography variant="subtitle" component="div">
                        Official highlights for this race haven't been released
                    </Typography>
                }
            </CardContent>
        </Card>
    )
}

export default Highlights;