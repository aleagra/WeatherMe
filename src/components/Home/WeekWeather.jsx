import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Cards from '../Cards';

function WeekWeather() {
    const { city, setLoading, loading } = useContext(WeatherContext);
    const [week, setWeek] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const fetchData = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric`
        )
            .then((response) => response.json())
            .then((data) => {
                setWeek(data.list);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, [city]);

    console.log(week);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return <>{week && week.map((item) => <Cards data={item} />)}</>;
}

export default WeekWeather;
