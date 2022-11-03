import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function RaceInfo(props) {
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
                        Date: {props.raceInfo.date}
                    </Typography>
                    <Typography>
                        Time: {props.raceInfo.time}
                    </Typography>
                    {/* TODO Convert time to user time */}
                    <Typography>
                        Your time: {props.raceInfo.raceDatetime}
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