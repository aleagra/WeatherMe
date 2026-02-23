import { useEffect, useState } from "react";
import MapPin from "../../utilities/icons/MapPin";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Navbar({ color }) {
  const { data, setData, setLoading, city, setCity } =
    useContext(WeatherContext);
  const [error, setError] = useState("");
  let anchoPantalla =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const getWeather = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9175b446bb90dac9af29b18ba0c06899&units=metric&rain`,
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
    <header className={`h-fit w-full lg:h-[6rem] ${color}`}>
      <nav className="flex h-full w-full flex-col items-center gap-y-6 py-4 text-black md:flex-row md:justify-between md:px-[2rem] xl:px-[4rem] 1440:px-[8rem]">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img
              src={anchoPantalla < 1280 ? "./whiteLogo.png" : "/logo.png"}
              alt="logo"
              className="w-[200px] min-w-[150px]"
            />
          </Link>
        </div>
        <div className="420:flex-row z-20 flex flex-col items-center gap-2 md:flex-row xl:gap-x-[2rem] 1440:-mr-8">
          <div className="flex">
            <span
              className={`whitespace-nowrap py-2 px-4 text-center md:py-3 ${
                data ? "bg-black/70 text-white" : "bg-transparent"
              }  appearance-none rounded-2xl font-medium outline-none`}
            >
              {data && (
                <>
                  <span>{data.name}, </span>
                  <span>{data.sys.country}</span>
                </>
              )}
            </span>
          </div>
          <div className="relative flex text-white">
            <MapPin />
            <input
              className="w-[13rem] whitespace-nowrap rounded-2xl bg-black/70 py-3 pl-[2.5rem] pr-2 text-white outline-none placeholder:text-white"
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
