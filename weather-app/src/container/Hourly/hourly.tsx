import React, { useEffect, useState } from "react";
import {
  HourlyContainer,
  HourlyInfo,
  WeatherIcon,
} from "../styled-componets/styled.module";
import { useLocation } from "react-router-dom";
import { SecondWrapper } from "../styled-componets/styled.module";
import { NavLink } from "react-router-dom";

interface HourlyData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  rain?: {
    "3h": number;
  };
  dt_txt: string;
}

const API_KEY = "d6173a99dd78f55c547d7d12a808a6b5"; // Replace with your OpenWeatherMap API key
let CITY_NAME = "Jakarta"; // Replace with the city name for which you want to fetch the weather
const App: React.FC = () => {
  const [hourlyData, setHourlyData] = useState<HourlyData[]>([]);
  const location = useLocation();
  const searchCity = location.state?.searchCity;
  CITY_NAME = searchCity;
  const fetchHourlyWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        setHourlyData(data.list);
      } else {
        console.error("Error fetching hourly weather data");
      }
    } catch (error) {
      console.error("Error fetching hourly weather data:", error);
    }
  };

  useEffect(() => {
    fetchHourlyWeather();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
      <SecondWrapper>
        {hourlyData.length > 0 && (
          <div className="container">
            <h1 className="capital">{CITY_NAME} Weather: 5-Hour Forecast</h1>
            {hourlyData.slice(0, 5).map((hour, index) => (

              <HourlyContainer key={index}>
                <HourlyInfo>
                  <h3>Date and Time:</h3> <h2>{hour.dt_txt}</h2>
                </HourlyInfo>

                <HourlyInfo>
                  <h3>Temperature: </h3> <h2>{hour.main.temp} °C</h2>
                </HourlyInfo>
                <HourlyInfo>
                  <h3>Feels Like:</h3> <h2>{hour.main.feels_like} °C</h2>
                </HourlyInfo>
                <HourlyInfo>
                  <h3>Humidity:</h3> <h2>{hour.main.humidity} %</h2>
                </HourlyInfo>
                <HourlyInfo>
                  <h3>Weather:</h3>{" "}
                  <h2>
                    {" "}
                    <WeatherIcon
                      src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
                      alt="Weather Icon"
                    />
                  </h2>
                </HourlyInfo>
                <HourlyInfo>
                  <h3>Wind Speed:</h3> <h2>{hour.wind.speed} m/s</h2>
                </HourlyInfo>
                {hour.rain && (
                  <HourlyInfo>
                    <h3>Rain (3h):</h3> <h2>{hour.rain["3h"]} mm</h2>
                  </HourlyInfo>
                )}
                <HourlyInfo>
                  <h3>Visibility:</h3> <h2>{hour.visibility} meters</h2>
                </HourlyInfo>
              </HourlyContainer>
            ))}
            
        <NavLink
          className="ButtonText"
          to="/"
        >
          <h1 className="button">Back to Current Weather</h1>
        </NavLink>
          </div>
          
        )}
      </SecondWrapper>
    </div>
  );
};

export default App;
