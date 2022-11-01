import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function RaceInfo(props) {
    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 10 }}>
            <Typography variant="h4" component="div">
                <strong>Race</strong>
            </Typography>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.raceInfo.country}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.raceInfo.track}
                </Typography>
                <Typography color="text.secondary">
                    Local time: {props.raceInfo.racetime}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Your time: {props.raceInfo.racetime}
                </Typography>
                <Typography variant="body2">
                    {props.raceInfo.trackDescription}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RaceInfo;