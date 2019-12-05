import React, { Component } from 'react';

export default class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const { cityName } = this.props;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;

    fetch(URL)
      .then((res) => res.json())
      .then((json) => this.setState({ weatherData: json }));
  }

  render() {
    const { weatherData } = this.state;

    if (!weatherData) {
      return <div>Loading...</div>;
    }
    
    const weather = weatherData.weather[0];
    const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;

    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {Math.round(weatherData.main.temp)}°</p>
        <p>High: {Math.round(weatherData.main.temp_max)}°</p>
        <p>Low: {Math.round(weatherData.main.temp_min)}°</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        <p>Pressure: {weatherData.main.pressure} hpa</p>
      </div>
    );
  }
}
