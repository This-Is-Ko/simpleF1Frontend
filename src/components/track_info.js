import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function TrackInfo(props) {
    return (
        <Card sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Track</strong>
            </Typography>
            {("name" in props.trackInfo) ?
                <CardContent>
                    <img className="track-map" alt="Track map" src={props.trackInfo.mapUri}/>
                    <Typography variant="h5" component="div">
                        {props.trackInfo.name}
                    </Typography>
                    <Typography variant="body2">
                        Turns: {props.trackInfo.turns}
                    </Typography>
                    <Typography variant="body2">
                        Laps: {props.trackInfo.laps}
                    </Typography>
                    <Typography variant="body2">
                        Distance: {props.trackInfo.distance}km
                    </Typography>
                    <Typography variant="body2">
                        {props.trackInfo.description}
                    </Typography>
                </CardContent>
                :
                <CardContent></CardContent>
            }
        </Card>
    )
}

export default TrackInfo;