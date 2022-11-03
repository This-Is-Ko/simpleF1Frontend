import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function NextRaceInfo(props) {
    return (
        <Card sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Upcoming</strong>
            </Typography>
            {("country" in props.nextRaceInfo) ?
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.nextRaceInfo.country}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.nextRaceInfo.track}
                    </Typography>
                    <Typography color="text.secondary">
                        Local time: {props.nextRaceInfo.racetime}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Your time: {props.nextRaceInfo.racetime}
                    </Typography>
                    <Typography variant="body2">
                        {props.nextRaceInfo.trackDescription}
                    </Typography>
                </CardContent>
                :
                <CardContent></CardContent>
            }
        </Card>
    )
}

export default NextRaceInfo;