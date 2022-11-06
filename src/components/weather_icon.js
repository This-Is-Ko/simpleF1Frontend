import { WiDaySunny, WiDaySunnyOvercast, WiFog, WiRainMix, WiRain, WiSnow, WiShowers, WiThunderstorm } from 'weather-icons-react';

function WeatherIcon(props) {
    switch (props.raceWeather.type) {
        default:
        case "Clear sky":
        case "Mainly clear":
            return (
                <WiDaySunny size={80} color='#000'/>
            )
        case "Partly cloudy":
        case "Overcast":
            return (
                <WiDaySunnyOvercast size={80} color='#000'/>
            )
        case "Fog":
        case "Depositing rime fog":
            return (
                <WiFog size={80} color='#000'/>
            )
        case "Light drizzle":
        case "Moderate drizzle":
        case "Light freezing drizzle":
        case "Dense freezing drizzle":
        case "Slight rain":
        case "Light freezing rain":
        case "Slight rain showers":
            return (
                <WiRainMix size={80} color='#000'/>
            )
        case "Dense drizzle":
        case "Moderate rain":
        case "Heavy rain":
        case "Heavy freezing rain":
            return (
                <WiRain size={80} color='#000'/>
            )
        case "Slight snow fall":
        case "Moderate snow fall":
        case "Heavy snow fall":
        case "Snow grains":
        case "Slight snow showers":
        case "Heavy snow showers":
            return (
                <WiSnow size={80} color='#000'/>
            )
        case "Moderate rain showers":
        case "Heavy rain showers":
            return (
                <WiShowers size={80} color='#000'/>
            )
        case "Slight thunderstorm":
        case "Thunderstorm with slight thunderstorm":
        case "Thunderstorm with heavy rain":
            return (
                <WiThunderstorm size={80} color='#000'/>
            )
    }
}

export default WeatherIcon;