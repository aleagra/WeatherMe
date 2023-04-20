import React, { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Cards, Navbar } from "../../components/";
import { Link } from "react-router-dom";
import { BackIcon, PeopleIcon } from "../../utilities";

function WeekWeather() {
  const { city } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);
  const [dates, setDates] = useState([]);

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

  return (
    <>
      <Navbar color="bg-gradient-to-r from-blue-500 to-blue-700 xl:from-transparent xl:to-transparent" />
      <section className="w-full  bg-slate-200 flex flex-col items-center px-[3rem]">
        <div className="h-fit ">
          {forecast &&
            forecast.map((item) => <Cards data={item} dates={dates} />)}
        </div>
        <div className="flex gap-4 mt-8  items-center px-2 mb-8 md:mb-8  md:justify-center xl:justify-start xl:my-12">
          <Link to="/">
            <button className="btn flex gap-2 items-center bg-blue-500 text-white/95 whitespace-nowrap">
              <BackIcon /> Back to Home
            </button>
          </Link>
          <Link to="/aboutus">
            <button className="btn flex gap-2 items-center bg-white whitespace-nowrap">
              <PeopleIcon /> About us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default WeekWeather;
