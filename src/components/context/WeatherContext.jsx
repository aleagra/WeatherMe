import { createContext, useState } from 'react';

export const WeatherContext = createContext();

function WeatherContextProvider({ children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    return (
        <WeatherContext.Provider
            value={{ data, loading, error, setData, setLoading, city, setCity }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherContextProvider;
