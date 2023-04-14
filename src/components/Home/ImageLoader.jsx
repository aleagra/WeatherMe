import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

const ImageLoader = ({ data, divClassName, imgClassName }) => {
  let weather = data.weather[0].description;
  const [loading, setLoading] = useState(true);
  let src;

  switch (weather) {
    case "clear sky":
      src = "./sun.png";
      break;
    case "few clouds":
    case "scattered clouds":
      src = "./sun-cloud.png";
      break;
    case "broken clouds":
      src = "./broken-clouds.png";
      break;
    case "overcast clouds":
    case "cloud":
    case "smoke":
    case "mist":
    case "haze":
    case "hurricane":
    case "tornado":
      src = "./cloud.png";
      break;
    case "light rain":
      src = "./rain-sun.png";
      break;
    case "moderate rain":
    case "heavy rain":
    case "intense rain":
      src = "./rain.png";
      break;
    case "light shower rain":
    case "moderate shower rain":
    case "heavy shower rain":
      src = "./shower-rain.png";
      break;
    case "light snow":
    case "moderate snow":
    case "heavy snow":
      src = "./winter.png";
      break;
    case "thunderstorm":
    case "heavy thunderstorm":
      src = "./thunder.png";
      break;
    case "rain and thunder":
      src = "./rain-thunder.png";
      break;
    case "snow and thunder":
      src = "./snow-thunder.png";
      break;
    case "sandstorm":
    case "duststorm":
      src = "./tormenta.png";
      break;
    default:
      src = "./cloud.png";
      break;
  }

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`relative ${divClassName} w-full z-[9]`}>
      {loading && <div className="loader relative top-[10rem]" />}
      <img
        key={src}
        src={src}
        alt={weather}
        className={`pulse  absolute w-full object-contain ${imgClassName} ${
          // absolute
          loading ? " hidden" : "block"
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageLoader;
