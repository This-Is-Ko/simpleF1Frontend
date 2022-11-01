import React from 'react';
import Header from "../components/Header";
import ResultsTable from "../components/results_table";
import RaceInfo from "../components/race_info";
import NextRaceInfo from '../components/next_race_info';
import RaceWeather from '../components/race_weather';
import Highlights from '../components/highlights';

const raceResults = [
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25", "fastestLap": true},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"},
    {"position":"1", "name":"Max", "time":"1:20:10", "points":"25"}
]

const raceInfo = {
    "raceName":  "Mexico City Grand Prix",
    "country":  "Mexico",
    "track":  "Autodromo Hermanos Rodriguez",
    "racetime": "time",
    "localtime": "time",
    "trackDescription": "A track in Mexico with turns ...."
}

const nextRaceInfo = {
    "raceName":  "Mexico City Grand Prix",
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
    return (
        <div>
            <Header raceInfo={raceInfo}></Header>
            <div className='content'>
                <div className='column'>
                    <ResultsTable raceResults={raceResults}/>
                </div>
                <div className='column'>
                    <RaceInfo raceInfo={raceInfo}/>
                </div>
                <div className='column'>
                    <RaceWeather raceWeather={raceWeather}/>
                    <NextRaceInfo nextRaceInfo={nextRaceInfo}/>
                    <Highlights raceHighlights={raceHighlights}/>
                </div>
            </div>
        </div>
    );
};
export default Home;