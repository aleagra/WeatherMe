import { useState, useContext } from "react";
import ImageLoader from "./ImageLoader";
import { WeatherContext } from "../context/WeatherContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { DropletIcon, LeftArrowIcon, SunIcon, WindIcon } from "../utilities";
import RightArrowIcon from "../utilities/icons/RightArrowIcon";

const Cards = ({ data, dates, active, setActive }) => {
  const [details, setDetails] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const dateObject = new Date(year, month, day);
    const dayOfWeek = dateObject.getDay();
    return daysOfWeek[dayOfWeek];
  };

  return (
    <>
      <div className="container py-12 max-sm:py-0 lg:px-12 ">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={false}
          navigation={{
            prevEl: ".my-swiper-prev", // Clase CSS personalizada para la flecha previa
            nextEl: ".my-swiper-next", // Clase CSS personalizada para la flecha siguiente
          }}
          modules={[Navigation]}
          touchEventsTarget="container"
          className="mySwiper "
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 0,
              // Ajusta este valor según tus necesidades
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30, // Ajusta este valor según tus necesidades
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30, // Ajusta este valor según tus necesidades
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30, // Ajusta este valor según tus necesidades
            },
            // Agrega más breakpoints y configuraciones según tus necesidades
          }}
        >
          {dates.map((date, index) => {
            const items = data[date]; // Obtén los datos correspondientes a la fecha actual

            // Utiliza el primer elemento de la lista para mostrar en la tarjeta
            const itemsZero = items[0];

            // Resto del código del componente SwiperSlide

            return (
              <SwiperSlide key={index}>
                <div
                  className={`h-[28rem] cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 px-[1rem] py-4  text-white  shadow-md transition-colors xl:rounded-2xl ${
                    selectedCardIndex === index
                      ? "bg-gradient-to-r from-blue-700 to-blue-900"
                      : ""
                  }`}
                  // Asegúrate de que no haya estilos que definan una posición absoluta o un z-index alto que pueda superponerse a las flechas de navegación
                  style={{ position: "relative", zIndex: 1 }}
                  onClick={() => {
                    setActive(true);
                    setDetails(items);
                    handleCardClick(index);
                  }}
                >
                  <div className="flex h-full w-full flex-col gap-1 text-center">
                    <span>{getDayOfWeek(date)}</span>
                    <span>{date}</span>
                    <div className="flex flex-col items-center ">
                      <ImageLoader
                        data={itemsZero}
                        divClassName="mt-6"
                        imgClassName=" w-full h-[11rem] "
                      />
                    </div>
                    <div className="mx-auto mt-auto flex flex-col">
                      <span className="mb-6 text-5xl font-bold">
                        {parseInt(itemsZero.main.temp)} °C
                      </span>
                      <div className="flex gap-x-4">
                        <div className="flex flex-col gap-y-1">
                          <span className="text-sm opacity-80">Humidity</span>
                          <span className="text-lg font-bold">
                            {itemsZero.main.humidity}{" "}
                            <span className="text-sm font-light">%</span>
                          </span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <span className="text-sm opacity-80">Feels like</span>
                          <span className="text-lg font-bold">
                            {parseInt(itemsZero.main.feels_like)}{" "}
                            <span className="text-sm font-light">°C</span>
                          </span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <span className="text-sm opacity-80">Wind</span>
                          <span className="text-lg font-bold">
                            {itemsZero.wind.speed}{" "}
                            <span className="text-sm font-light">km/h</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="my-swiper-prev">
            <LeftArrowIcon />
          </div>
          <div className="my-swiper-next">
            <RightArrowIcon />
          </div>
        </Swiper>
      </div>
      {active && (
        <div className="flex justify-center lg:px-12">
          <div className="w-full  text-lg">
            <div className="h-fit w-full items-center bg-blue-500 text-white xl:rounded-lg">
              {details.map((item, index) => (
                // <div
                //   key={index}
                //   className="m-auto flex w-full items-center gap-4 p-4 max-900:w-[60%] max-md:w-2/3 max-sm:w-[33%] sm:w-[60%] md:w-2/3 lg:w-full xl:w-[92%] "
                // >
                <div
                  key={index}
                  className="m-auto flex w-full items-center gap-4 p-4  "
                >
                  <div className="flex w-full justify-center max-2xl:w-1/2">
                    <span className="text-xl max-md:text-base">
                      {item.dt_txt.split(" ")[1].slice(0, 5)} HS
                    </span>
                  </div>
                  <div className="flex w-full items-center sm:w-2/3">
                    <ImageLoader data={item} imgClassName="h-12 relative" />
                    <p className="w-full text-center text-base uppercase max-md:text-sm">
                      {item.weather[0].description}
                    </p>
                  </div>
                  <div className="flex w-1/2 justify-center sm:w-1/3">
                    <div className="flex flex-col max-md:text-base">
                      <span>{parseInt(item.main.temp)} °C</span>
                    </div>
                  </div>
                  <div className="flex w-1/2 justify-center gap-3 max-xl:hidden">
                    <DropletIcon />
                    <div className="flex flex-col">
                      <span>{item.main.humidity}%</span>
                    </div>
                  </div>
                  <div className="flex w-1/2 justify-center gap-3 max-xl:hidden">
                    <WindIcon />
                    <div className="flex flex-col">
                      <span>{item.wind.speed} km/h</span>
                    </div>
                  </div>
                  <div className="flex w-1/2 justify-center gap-3 max-xl:hidden">
                    <SunIcon />
                    <div className="flex flex-col">
                      <span>{parseInt(item.main.feels_like)} °C</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
