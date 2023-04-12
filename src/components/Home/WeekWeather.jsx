import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Cards from "../Cards";
import Navbar from "../Navbar/Navbar";

function WeekWeather() {
  const { city, setLoading, loading } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);
  const [dates, setDates] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const forecastsByDay = data.list
          .slice(0, 40) // solo tomamos los primeros 40 resultados (5 días a 8 pronósticos por día)
          .reduce((forecasts, forecast) => {
            const date = forecast.dt_txt.split(" ")[0]; // obtener la fecha sin la hora

            if (!forecasts[date]) {
              forecasts[date] = []; // si es la primera vez que se encuentra la fecha, se crea un nuevo array vacío
            }
            forecasts[date].push(forecast); // se agrega el pronóstico al array correspondiente al día

            return forecasts;
          }, {});

        const allDates = Object.keys(forecastsByDay); // obtenemos un array con todas las fechas

        setDates(allDates); // actualizamos el array con todas las fechas
        setForecast([forecastsByDay]); // actualizamos los pronósticos por día
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  if (loading) {
    return <div className="loader bg-primary" />;
  }

  return (
    <>
      <Navbar color=" " />
      <section className="w-full h-full flex flex-col items-center px-[3rem]">
        <div className="h-fit py-2">
          {forecast &&
            forecast.map((item) => <Cards data={item} dates={dates} />)}
        </div>
      </section>
    </>
  );
}

export default WeekWeather;
