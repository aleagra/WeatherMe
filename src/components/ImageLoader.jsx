import { useState } from "react";

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
    <div className={`relative ${divClassName} z-[9] w-full`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
        </div>
      )}

      <img
        key={src}
        src={src}
        alt={weather}
        onLoad={handleImageLoad}
        className={`w-full object-contain transition-opacity duration-500 ${imgClassName} ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default ImageLoader;
