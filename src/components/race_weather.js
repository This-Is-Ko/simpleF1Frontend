import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { WiDaySunny } from 'weather-icons-react';

function RaceWeather(props) {
    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 10 }}>
            <Typography variant="h4" component="div">
                <strong>Weather</strong>
            </Typography>
            <CardContent>
                <div className='weather-column'>
                    <WiDaySunny size={80} color='#000'/>
                    <Typography variant="h5" component="div">
                        Qualifying
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.raceWeather.qualifying}
                    </Typography>
                </div>
                <div className='weather-column'>
                    <WiDaySunny size={80} color='#000'/>
                    <Typography variant="h5" component="div">
                        Race
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.raceWeather.race}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default RaceWeather;