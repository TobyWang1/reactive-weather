// import partlyCloudy from "../assets/PartlyCloudy.svg";
// import cloudy from "../assets/Cloudy.svg";
// import sunny from "../assets/Sunny.svg"; // Ensure all required imports exist
// import rainy from "../assets/Rainy.svg";

// function WeatherCard({ city }) {
//   let weatherIcon;

//   if (city.forecast === "Sunny") {
//     weatherIcon = sunny;
//   } else if (city.forecast === "Rainy") {
//     weatherIcon = rainy;
//   } else if (city.forecast === "Partly cloudy") {
//     weatherIcon = partlyCloudy;
//   } else if (city.forecast === "Cloudy") {
//     weatherIcon = cloudy;
//   }

//   return (
//     <div className="card">
//       <div className="img-container">
//         {weatherIcon ? (
//           <img
//             className="card-img-top"
//             src={weatherIcon}
//             alt="Weather icon"
//             id="icon"
//           />
//         ) : (
//           <p>No specific forecast available</p>
//         )}
//       </div>
//       <div className="card-body">
//         <h3 className="card-title">{city.city}</h3>
//         <h5 className="card-text">{city.temperature}</h5>
//         <h5 className="card-text">{city.forecast}</h5>
//       </div>
//     </div>
//   );
// }

// export default WeatherCard;

import React from 'react';

function WeatherCard({ city, data }) {
    if (!data) {
        return <div className="weather-card">Loading...</div>;
    }

    const { timezone, hourly } = data;
    const { temperature_2m } = hourly;

    return (
        <div className="weather-card">
            <h2>Weather in {city}</h2>
            <p>Timezone: {timezone}</p>
            <p>Current Temperature: {temperature_2m[0]}&deg;C</p>
        </div>
    );
}

export default WeatherCard;