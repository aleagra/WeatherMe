import React from 'react';
import { Weather } from '../components';
import { WeatherContext } from '../components/context/WeatherContext';
import { useContext } from 'react';
function Home() {
    
    const { data } = useContext(WeatherContext);

    return (

        <main className="w-full h-full flex relative">
            <div className="w-[50%] px-[8rem] pt-[2rem] flex flex-col gap-y-[6rem]">
                <div className="flex flex-col gap-y-4">
                    <h1 className="font-bold text-[7em]">We Know The Future!</h1>
                    <div className="text-[1.5em]">
                        <p>We are the weather forecast system.</p>
                        <p>
                            We are a weather forecasting system.Our experts check the information
                            with the most modern satellite equipment and powerfull servers. And they
                            whit give you the most accurate results.
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-6">
                    <button className="btn bg-black text-white/95">See the week weather</button>
                    <button className="btn bg-slate-200">More features</button>
                </div>
            </div>
            <div className="absolute right-0 w-[52%] h-full bg-primary -skew-x-[10deg] translate-x-[5rem] -translate-y-[6rem] -z-10">
                <Weather />
            </div>
        
        
        {/* tendria que ir en otro componente */}
        <div className='w-1/3 text-center flex flex-col justify-center text-white'>
    {data && (
      <>
        <p className='  text-8xl'> {parseInt(data.main.temp)}°C</p>
        <p className='text-8xl'>{data.weather[0].description}</p>
        
        <div className='flex  justify-center'>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Feels like: {parseInt(data.main.feels_like)}°C</p>
        <p>Wind: {data.wind.speed} Km/h</p>
        </div>
      </>
    )}
  </div>

        </main>
      
    );
}

export default Home;
