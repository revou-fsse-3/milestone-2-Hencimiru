import React, { useEffect, useState, useCallback } from "react";
import { MainWrapper } from "../styled-componets/styled.module";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsCloudFog2Fill,
  BsFillCloudRainFill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the shape of weather data
interface WeatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

// Functional component for displaying weather information
const DisplayWeather: React.FC = () => {
  // React hook to enable navigation in the app
  const navigate = useNavigate();

  // API key and endpoint for OpenWeatherMap API
  const api_key = "d6173a99dd78f55c547d7d12a808a6b5";
  const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

  // State variables
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchCity, setSearchCity] = useState<string>("");

  // Function to fetch current weather based on latitude and longitude
  const fetchCurrentWeather = useCallback(
    async (lat: number, lon: number): Promise<WeatherDataProps> => {
      const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
      const response = await axios.get<WeatherDataProps>(url);
      return response.data;
    },
    [api_Endpoint, api_key]
  );

  // Function to fetch weather data for a given city
  const fetchWeatherData = async (city: string): Promise<{ currentWeatherData: WeatherDataProps }> => {
    try {
      const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const searchResponse = await axios.get<WeatherDataProps>(url);

      const currentWeatherData: WeatherDataProps = searchResponse.data;
      return { currentWeatherData };
    } catch (error) {
      throw error;
    }
  };

  // Function to handle the search button click
  const handleSearch = async () => {
    if (searchCity.trim() === "") {
      return;
    }

    try {
      const { currentWeatherData } = await fetchWeatherData(searchCity);
      setWeatherData(currentWeatherData);
    } catch (error) {
      // Handle error
    }
  };

  // Function to handle the city search button click
  const handleSearchCity = () => {
    if (searchCity) {
      fetchWeatherData(searchCity).then(({ currentWeatherData }) => {
        setWeatherData(currentWeatherData);
        // Redirect to the next page (assuming "/hourly" is the route for the next page)
        navigate("/hourly", { state: { searchCity } });
      });
    }
  };

  // Function to determine the appropriate weather icon based on weather conditions
  const iconChanger = (weather: string): React.ReactNode => {
    let iconElement: React.ReactNode;
    let iconColor: string;

    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />;
        iconColor = "#272829";
        break;

      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#FFC436";
        break;
      case "Clouds":
        iconElement = <BsCloudyFill />;
        iconColor = "#102C57";
        break;

      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#279EFF";
        break;
      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }

    return (
      <span className="icon" style={{ color: iconColor }}>
        {iconElement}
      </span>
    );
  };

  // Use effect hook to fetch weather data based on current geolocation
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const [currentWeather] = await Promise.all([fetchCurrentWeather(latitude, longitude)]);
        setWeatherData(currentWeather);
        setIsLoading(true);
      });
    };

    fetchData();
  }, [fetchCurrentWeather]);

  return (
    <MainWrapper>
      <div className="container">
        <h1 className="h1">Current Weather</h1>
        <div className="searchArea">
          <input
            type="text"
            placeholder="Enter a City"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />

          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
          </div>
        </div>

        {weatherData && isLoading ? (
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">{iconChanger(weatherData.weather[0].main)}</div>
              <h1>{weatherData.main.temp.toFixed(0)}</h1>
              <h2>{weatherData.weather[0].main}</h2>
            </div>

            <div className="bottomInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="humidIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind">
                <SiWindicss className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.wind.speed}km/h</h1>
                  <p>Wind speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
            <p>Loading</p>
          </div>
        )}
        <div className="topfive">
          <button className="button" onClick={handleSearchCity}>
            <h1 className="ButtonText"> {searchCity} Weather: 5-Hour Forecast</h1>
          </button>
        </div>
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
