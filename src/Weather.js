import React from "react";

function Weather({ weather }) {
  return (
    <div className="current-weather">
      <h2>{weather.name}</h2>
      <h3>{Math.round(weather.main.temp - 273.15)}°C</h3>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
    </div>
  );
}

export default Weather;
