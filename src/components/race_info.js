import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function RaceInfo(props) {

    var localDate = new Date(props.raceInfo.dateTimeUtc);
    console.log(localDate)

    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 5 }}>
            <Typography variant="h4" component="div">
                <strong>Race</strong>
            </Typography>
            {("country" in props.raceInfo) ?
                <CardContent>
                    <Typography component="div">
                        City: {props.raceInfo.city}
                    </Typography>
                    <Typography>
                        Country: {props.raceInfo.country}
                    </Typography>
                    <Typography>
                        Local: {props.raceInfo.raceDateTime}
                    </Typography>
                    {/* TODO Convert time to user time */}
                    <Typography>
                        Your time: {localDate.toUTCString()}
                    </Typography>
                    <Typography variant="body2">
                        {props.raceInfo.trackDescription}
                    </Typography>
                </CardContent>
                : 
                <CardContent></CardContent>
            }
            
        </Card>
    )
}

export default RaceInfo;