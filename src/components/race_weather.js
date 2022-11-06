import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import WeatherIcon from './weather_icon';

function RaceWeather(props) {
    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Weather</strong>
            </Typography>
            {("qualifying" in props.raceWeather) ?
                <CardContent sx={{ paddingTop: 0 }}>
                    <div className='weather-column'>
                        <WeatherIcon raceWeather={props.raceWeather.qualifying}/>
                        <Typography variant="h5" component="div">
                            Qualifying
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.raceWeather.qualifying.temp}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.raceWeather.qualifying.type}
                        </Typography>
                    </div>
                    <div className='weather-column'>
                    <WeatherIcon raceWeather={props.raceWeather.race}/>
                        <Typography variant="h5" component="div">
                            Race
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.raceWeather.race.temp}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.raceWeather.race.type}
                        </Typography>
                    </div>
                </CardContent>
                : 
                <CardContent></CardContent>
            }
            
        </Card>
    )
}

export default RaceWeather;