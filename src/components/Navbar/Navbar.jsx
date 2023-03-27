import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MapPin from "../../utilities/icons/MapPin";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

// icons

function Navbar() {
  const { data, setData, setLoading } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      setLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data); // Imprimir data dentro de la función then
          setCity("");
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <header className="w-full h-[6rem] bg-transparent">
      <nav className="h-full w-full px-[8rem] flex justify-between text-black items-center">
        <div className="flex gap-x-[4rem]">
          Logo
          <NavLink to="/">About us</NavLink>
        </div>
        <div className="flex gap-x-[6rem]">
          <div className="flex gap-x-[2rem]">
            <p
              className="h-[56px] w-[170px] py-4 text-center  bg-white rounded-2xl outline-none font-medium appearance-none"
           
            >
              {data && data.name}
            </p>


            <p className=" h-[56px] w-[40px] py-4 text-center  bg-white rounded-2xl outline-none font-medium appearance-none">
              {data && data.sys.country}
            </p>
          </div>
          <div className=" text-white  relative flex">
            <MapPin />
            <input
              className="w-full pl-8  text-white py-[.5rem]  outline-none bg-[#8671CF]  rounded-2xl placeholder:text-white"
              type="text"
              placeholder="Search your location"
              onChange={(event) => setCity(event.target.value)}
              value={city}
              onKeyDown={getWeather}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
