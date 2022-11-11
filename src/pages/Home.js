import React, { useState, useEffect } from 'react';
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingMessage from "../components/loading_message";
import ResultsTable from "../components/results_table";
import RaceInfo from "../components/race_info";
import NextRaceInfo from '../components/next_race_info';
import RaceWeather from '../components/race_weather';
import Highlights from '../components/highlights';
import TrackInfo from '../components/track_info';
import DriversChampionshipTable from '../components/drivers_championship_table';
import ConstructorsChampionshipTable from '../components/constructors_championship_table';

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                h4: {
                    fontFamily: "'Libre Franklin', sans-serif;",
                },
                subtitle1: {
                    fontFamily: "'Libre Franklin', sans-serif;",
                },
                body1: {
                    fontFamily: "'Libre Franklin', sans-serif;",
                },
            },
        },
    },
  });

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [raceData, setRaceData] = useState({
        race: {},
        track: {},
        weather: {},
        highlights: {},
        results: [],
        driversStandings: [],
        constructorsStandings: [],
        nextRace: {},
    });
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URI + "/api/latest")
            .then(
                (response) => {
                    setIsLoaded(true);
                    setRaceData(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log("error: " + error);
                    setError(error);
                    setIsLoaded(true);
                }
            )
      }, [])

    if (!isLoaded) {
        return (
            <ThemeProvider theme={theme}>
                <Helmet>
                    <title>Home | Simple F1</title>
                    <meta name='description' content='View the latest F1 Grand Prix statistics including race results, track information and more'/>
                    <link rel="canonical" href="https://www.simplef1.com/"/>
                </Helmet>
                <Header raceInfo={""}></Header>
                <div className='content'>
                    <div className='loading-container'>
                        <CircularProgress size="4rem" sx={{color:"#04789a"}}/>
                        <LoadingMessage />
                    </div>
                </div>
            </ThemeProvider>
        )
    } else if (error != null){
        return (
            <ThemeProvider theme={theme}>
                <Helmet>
                    <title>Home | Simple F1</title>
                    <meta name='description' content='View the latest F1 Grand Prix statistics including race results, track information and more'/>
                    <link rel="canonical" href="https://www.simplef1.com/"/>
                </Helmet>
                <Header raceInfo={""}></Header>
                <div className='content'>
                    <div className='loading-container'>
                        <Typography variant="subtitle1" sx={{paddingTop:"10px", color:"black"}}>🚩 Red flag 🚩</Typography>
                        <Typography variant="subtitle1" sx={{color:"black"}}>Please try again later</Typography>
                    </div>
                </div>
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Home | Simple F1</title>
                <meta name='description' content='View the latest F1 Grand Prix statistics including race results, track information and more'/>
                <link rel="canonical" href="https://www.simplef1.com/"/>
            </Helmet>
            <Header raceInfo={raceData.race}></Header>
            <div className='content'>
                <div className='column'>
                    <ResultsTable raceResults={raceData.results}/>
                    <Highlights raceHighlights={raceData.highlights}/>
                </div>
                <div className='column'>
                    <RaceInfo raceInfo={raceData.race}/>
                    <RaceWeather raceWeather={raceData.weather}/>
                    <TrackInfo trackInfo={raceData.track}/>
                </div>
                <div className='column'>
                    <DriversChampionshipTable driverStandings={raceData.driversStandings}/>
                    <ConstructorsChampionshipTable constructorsStandings={raceData.constructorsStandings}/>
                    <NextRaceInfo nextRaceInfo={raceData.nextRace}/>
                </div>
            </div>
            <Footer></Footer>
        </ThemeProvider>
    );
};
export default Home;