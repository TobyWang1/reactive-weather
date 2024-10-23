import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import Form from './components/Form';
import cities from './data';

function App() {
    const [location, setLocation] = useState('');

    return (
        <>
            <Form location={location} setLocation={setLocation}/>
            <Location data={cities} location={location} setLocation={setLocation} />
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <div className="app">
                {cities.map(city => (
                    <WeatherCard city={city} key={city.name} />
                ))}
            </div>
        </>
    );
}

export default App;