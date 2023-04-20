import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MapPin from "../../utilities/icons/MapPin";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
// icons

function Navbar({ color }) {
  const { data, setData, setLoading, city, setCity } =
    useContext(WeatherContext);
  const [error, setError] = useState("");
  const notify = () => toast("Here is your toast.");
  let anchoPantalla =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const getWeather = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric&rain`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        localStorage.setItem("city", JSON.stringify(city));
      })
      .catch((error) => {
        setError(error);
        toast.error("Enter an available location.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <header className={`w-full h-fit lg:h-[6rem] ${color}`}>
      <nav className="h-full w-full md:px-[2rem] xl:px-[4rem] 1440:px-[8rem] py-4 gap-y-6 flex flex-col md:flex-row md:justify-between text-black items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src={anchoPantalla <= 1280 ? "./whiteLogo.png" : "/logo.png"}
              alt=""
              className="min-w-[150px] w-[200px]"
            />
          </Link>
        </div>
        <div className="flex gap-2 xl:gap-x-[2rem] 1440:-mr-8 flex-col md:flex-row items-center 420:flex-row z-20">
          <div className="flex">
            <span
              className={`py-2 px-4 whitespace-nowrap md:py-3 text-center ${
                data ? "bg-black/70 text-white" : "bg-transparent"
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
              className="w-[13rem] pl-[2.5rem] pr-2 text-white whitespace-nowrap py-3 outline-none bg-black/70 rounded-2xl placeholder:text-white"
              type="search"
              placeholder="Search your location"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setCity(event.target.value);
                }
              }}
            />
          </div>
        </div>
      </nav>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
}

export default Navbar;
