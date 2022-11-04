import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function RaceInfo(props) {

    var userDateTime = new Date(props.raceInfo.dateTimeUtc);
    var raceDateTime = (new Date(props.raceInfo.raceDateTime)).toLocaleString();
    var date = (raceDateTime.split(", "))[0]
    var time = (raceDateTime.split(", "))[1]

    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 0 }}>
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
                        Date: {date}
                    </Typography>
                    <Typography>
                        Time: {time}
                    </Typography>
                    <Typography variant="caption">
                        Local: {userDateTime.toLocaleString()}
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