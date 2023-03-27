import { createContext, useState } from 'react';

export const WeatherContext = createContext();

function WeatherContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <WeatherContext.Provider value={{ data, loading, error, setData,setLoading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContextProvider;