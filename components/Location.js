import WeatherCard from "./WeatherCard";
import { useState, useEffect } from 'react';

function Location({location, setCityData}) {
    // Find city's geolocation based on location variable through location API URL
    const geoLocationUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`

    useEffect( () => {
        if (!location) return;

        async function getGeoLocation() {
            try {
                const response = await fetch(geoLocationUrl);
                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    const { latitude, longitude } = data.results[0];
                    fetchWeather(latitude, longitude);
                } else {
                    setCityData(null); // No result found
                }
            } catch (error) {
                console.error("Error fetching geolocation data", error);
            }
        }

        async function fetchWeather(latitude, longitude) {
            try {
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
                const response = await fetch(weatherUrl);
                const weatherData = await response.json();
                setCityData(weatherData);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }
        getGeoLocation();
    }, [location] );
}

export default Location;