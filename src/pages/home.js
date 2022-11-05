import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResultsTable from "../components/results_table";
import RaceInfo from "../components/race_info";
import NextRaceInfo from '../components/next_race_info';
import RaceWeather from '../components/race_weather';
import Highlights from '../components/highlights';
import TrackInfo from '../components/track_info';
import DriversChampionshipTable from '../components/drivers_championship_table';
import ConstructorsChampionshipTable from '../components/constructors_championship_table';
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          h4: {
            fontFamily: "'Libre Franklin', sans-serif;",
          },
        },
      },
    },
  });

const raceResults = [
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"2", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"3", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"4", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"5", "name":"Max", "time":"1:20:10", "points":"25", "fastestLap": true},
    {"position":"6", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"7", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"8", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"9", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"10", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"11", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"12", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"13", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"14", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"15", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"16", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"17", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"18", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"19", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"20", "name":"Max", "time":"DNF", "points":"25"}
]

const driverStandings = [
    {"position":"1", "name":"Max", "points":"25"},
    {"position":"2", "name":"Max", "points":"25"},
    {"position":"3", "name":"Max", "points":"25"},
    {"position":"4", "name":"Max", "points":"25"},
    {"position":"5", "name":"Max", "points":"25"},
    {"position":"6", "name":"Max", "points":"25"},
    {"position":"7", "name":"Max", "points":"25"},
    {"position":"8", "name":"Max", "points":"25"},
    {"position":"9", "name":"Max", "points":"25"},
    {"position":"10", "name":"Max", "points":"25"},
    {"position":"11", "name":"Max", "points":"25"},
    {"position":"12", "name":"Max", "points":"25"},
    {"position":"13", "name":"Max", "points":"25"},
    {"position":"14", "name":"Max", "points":"25"},
    {"position":"15", "name":"Max", "points":"25"},
    {"position":"16", "name":"Max", "points":"25"},
    {"position":"17", "name":"Max", "points":"25"},
    {"position":"18", "name":"Max", "points":"25"},
    {"position":"19", "name":"Max", "points":"25"},
    {"position":"20", "name":"Max", "points":"25"}
]

const constructorsStandings = [
    {"position":"1", "name":"Red Bull Racing", "points":"25"},
    {"position":"2", "name":"Max", "points":"25"},
    {"position":"3", "name":"Max", "points":"25"},
    {"position":"4", "name":"Max", "points":"25"},
    {"position":"5", "name":"Max", "points":"25"},
    {"position":"6", "name":"Max", "points":"25"},
    {"position":"7", "name":"Max", "points":"25"},
    {"position":"8", "name":"Max", "points":"25"},
    {"position":"9", "name":"Max", "points":"25"},
    {"position":"10", "name":"Max", "points":"25"}
]

const raceInfo = {
    "name":  "Mexico City Grand Prix",
    "city":  "Mexico",
    "country":  "Mexico",
    "raceDatetime": "time"
}

const trackInfo = {
    "name":  "Autodromo Hermanos Rodriguez",
    "map": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/9col/image.png",
    "description": "A track in Mexico with turns ....",
    "turns": "15",
    "laps": "50",
    "distance": "100"
}

const nextRaceInfo = {
    "name":  "Mexico City Grand Prix",
    "country":  "Mexico",
    "track":  "Autodromo Hermanos Rodriguez",
    "racetime": "time",
    "localtime": "time",
    "trackDescription": "A track in Mexico with turns ...."
}

const raceWeather = {
    "qualifying": "Sunny",
    "race": "Sunny"
}

const raceHighlights = {
    "link": "https://www.youtube.com/embed/txuU3noS0H0"
}

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
        console.log(process.env.REACT_APP_API_URI + "/api/latest")
        axios.get(process.env.REACT_APP_API_URI + "/api/latest")
          .then(
            (response) => {
                setIsLoaded(true);
                setRaceData(response.data);
            }
          )
          .catch((error) => console.log("error: " + error))
      }, [])

    return (
        <ThemeProvider theme={theme}>
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