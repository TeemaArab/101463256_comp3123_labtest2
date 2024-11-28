import React, { useState, useEffect } from "react"; 
import "./App.css"; 

function App() {
  const [city, setCity] = useState("Toronto"); // Default city
  const [weather, setWeather] = useState(null); // Weather data

  
  const fetchWeather = async (cityName) => {
    const APIKey = "b0892261b5eef1f632985f4909ea222e";  // API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setWeather(data); // Save weather data to state
      } else {
        alert("City not found! Please try again.");
      }
    } catch (error) {
      alert("Error fetching weather data.");
    }
  };

  // Fetch weather for the default city on app load
  useEffect(() => {
    fetchWeather(city);
  }, []); 

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => fetchWeather(city)}>Get Weather</button>
      </div>
      {weather && (
        <div className="weather-display">
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
      )}
    </div>
  );
}

export default App;




