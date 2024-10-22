import WeatherCard from "./WeatherCard";

function Location({ data, location, setLocation }) {
    console.log("Data:", data);
    console.log("Current location:", location);
    // Find city based on location prop
    const city = data.find(city => city.city === location); // Ensure correct property for comparison

    return (
        <>
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <div className="app">
                {city ? (
                    <WeatherCard city={city} />
                ) : (
                    <p>No city found for the given location.</p>
                )}
            </div>
        </>
    );
}

export default Location;