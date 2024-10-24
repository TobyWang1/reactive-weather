import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';
import Form from './components/Form';

function App() {
    const [location, setLocation] = useState('');
    const [cityData, setCityData] = useState(null);

    return (
        <>
            <Form setLocation={setLocation}/>
            <Location location={location} setCityData={setCityData} />
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            {/* <div className="app">
                {cities.map(city => (
                    <WeatherCard city={city} key={city.name} />
                ))}
            </div> */}
            <div className="app">
                <WeatherCard city={location} data={cityData} />
            </div>
        </>
    );
}

export default App;