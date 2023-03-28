import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function WeekWeather() {
  const { city } = useContext(WeatherContext);
  const [week, setWeek] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [nextFiveDays, setNextFiveDays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric`
        );
        const data = await response.json();
        const filteredData = data.list.filter((item, index) => index % 8 === 0);
        setNextFiveDays(filteredData);
        setDataLoaded(true);
        if (!week) {
          setWeek(response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
console.log(nextFiveDays)
  return (
    <>
      {dataLoaded ? (
        <>
          {city &&
            nextFiveDays.map((day) => (
              <div key={day.dt} className="flex flex-col ">
                <p className="font-bold">Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                <p>Description: {day.main.humidity}%</p>
                <p>Temperature: {parseInt(day.main.temp)}°C</p>
                <p>Feels like: {parseInt(day.main.feels_like)}°C</p>
                <p>Description: {day.weather[0].description}</p>
                <p>Wind: {day.wind.speed} Km/h</p>

              </div>
            ))}
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

export default WeekWeather;
