import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MapPin from '../../utilities/icons/MapPin';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
// icons


function Navbar() {
    const { data, setData, setLoading,city,setCity } = useContext(WeatherContext);
    const [error, setError] = useState("");  
    const notify = () => toast('Here is your toast.');
    
    
    const getWeather = (event) => {
        if (event.key == 'Enter') {
          setLoading(true);
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric&rain`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error('City not found');
              }
              return response.json();
            })
            .then((data) => {
              setData(data);
            })
            .catch((error) => {
              setError(error);
              toast.error("Enter an available location.")
            })
            .finally(() => setLoading(false));
        }
      };
    return (
        
        <header className="w-full h-[6rem] bg-transparent">
            <nav className="h-full w-full px-[8rem] flex justify-between text-black items-center">
                <div className="flex gap-x-[4rem] items-center">
              <Link to="/"> <img src="./logo.png" alt="" className='w-[150px]' /></Link> 
                    {/* <NavLink to="/" className="text-lg">About us</NavLink> */}
                </div>
                <div className="flex gap-x-[6rem]">
                    <div className="flex gap-x-[2rem]">
                        <span
                            className={` px-4 whitespace-nowrap py-4 text-center ${
                                data ? 'bg-white' : 'bg-transparent'
                            }  rounded-2xl outline-none font-medium appearance-none`}
                        >
                            {data && (
                                <>
                                    <span>{data.name}, </span>
                                    <span>{data.sys.country}</span>
                                </>
                            )}
                        </span>
                    </div>
                    <div className="text-white relative flex">
                        <MapPin />
                        <input
                            className=" w-[13rem] pl-[2.5rem] pr-2 text-white whitespace-nowrap py-4  outline-none bg-blue-600  rounded-2xl placeholder:text-white"
                            type="search"
                            placeholder="Search your location"
                            onChange={(event) => setCity(event.target.value)}
                            value={city}
                            onKeyDown={getWeather}
                        />
                    </div>
                </div>
            </nav>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </header>
    );
}

export default Navbar;
