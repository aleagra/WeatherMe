import React, { useEffect, useState, useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { Buttons, Cards, Navbar } from '../../components/';
import { Link } from 'react-router-dom';
import { BackIcon, PeopleIcon } from '../../utilities';

function WeekWeather() {
    const { city, loading, setLoading } = useContext(WeatherContext);
    const [forecast, setForecast] = useState([]);
    const [dates, setDates] = useState([]);

    const fetchData = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric`
        )
            .then((response) => response.json())
            .then((data) => {
                setLoading(true);
                const forecastsByDay = data.list
                    .slice(0, 40) // solo tomamos los primeros 40 resultados (5 días a 8 pronósticos por día)
                    .reduce((forecasts, forecast) => {
                        const date = forecast.dt_txt.split(' ')[0]; // obtener la fecha sin la hora

                        if (!forecasts[date]) {
                            forecasts[date] = []; // si es la primera vez que se encuentra la fecha, se crea un nuevo array vacío
                        }
                        forecasts[date].push(forecast); // se agrega el pronóstico al array correspondiente al día

                        return forecasts;
                    }, {});

                const allDates = Object.keys(forecastsByDay); // obtenemos un array con todas las fechas

                setDates(allDates); // actualizamos el array con todas las fechas
                setForecast([forecastsByDay]); // actualizamos los pronósticos por día
                setLoading(false);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchData();
    }, [city]);

    return (
        <>
            <Navbar color="bg-gradient-to-r from-blue-500 to-blue-700 xl:from-transparent xl:to-transparent" />
            <section className="flex w-full flex-col items-center bg-slate-200 px-[3rem]">
                <div className="h-fit">
                    {forecast && forecast.map((item) => <Cards data={item} dates={dates} />)}
                    {loading && <div className="loader mt-[4rem] mb-[2rem]" />}
                </div>

                <Buttons
                    classContainer="pb-8 flex items-center gap-4 px-2 md:justify-center xl:my-12 xl:justify-start"
                    classBtn1="bg-blue-500 text-white/95"
                    iconBtn1={<BackIcon />}
                    textBtn1="Back to home"
                    pathBtn1="/"
                    classBtn2="bg-white"
                    iconBtn2={<PeopleIcon />}
                    textBtn2="About us"
                    pathBtn2="/aboutus"
                />
            </section>
        </>
    );
}

export default WeekWeather;
