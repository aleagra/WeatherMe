import { useState } from "react";
import ImageLoader from "./ImageLoader";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { DropletIcon, SunIcon, WindIcon } from "../utilities";

const Cards = ({ data, dates }) => {
  const [active, setActive] = useState(false);
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
      <Splide
        hasTrack={false}
        options={{
          perPage: 4,
          rewind: false,
          perMove: 1,
          gap: "3rem",
          padding: "1.5rem",
          pagination: false,
          breakpoints: {
            764: {
              perPage: 1,
            },

            1200: {
              perPage: 2,
              gap: "2rem",
              padding: "0rem",
            },
            1600: {
              perPage: 3,
              gap: "3rem",
            },
          },
        }}
      >
        <SplideTrack className="  m-auto max-800:w-[57%] max-900:w-[58%] max-1024:w-[68%]  max-1200:w-[75%] max-xl:w-[85%] max-2xl:w-[90%]">
          {dates.map((date, index) => {
            const items = data[date].map((item) => item); // Guarda los items en un nuevo array
            const itemsZero = items[0];
            return (
              <SplideSlide key={index}>
                <div
                  className={`px-[1rem] h-[27rem] py-4 rounded-2xl bg-blue-500 shadow-md  text-white transition-colors cursor-pointer ${
                    selectedCardIndex === index ? "bg-blue-700/90" : "" // Cambia el color de fondo si la card está seleccionada
                  }`}
                  onClick={() => {
                    setActive(true);
                    setDetails(items);
                    handleCardClick(index);
                  }}
                >
                  <div className="flex gap-1 flex-col text-center h-full w-full">
                    <span>{getDayOfWeek(date)}</span>
                    <span>{date}</span>
                    <div className="flex items-center flex-col ">
                      <ImageLoader
                        data={itemsZero}
                        divClassName="mt-6"
                        imgClassName="pulse w-full h-[11rem] "
                      />
                    </div>
                    <div className="flex flex-col mt-auto mx-auto">
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
              </SplideSlide>
            );
          })}
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </Splide>

      {active && (
        <div className="flex justify-center ">
          <div className="w-full   sm:px-6 md:px-16 text-lg">
            <div className="w-full h-fit  rounded-lg text-white items-center bg-blue-500  ">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="w-full   max-sm:w-[35%] sm:w-[60%] max-md:w-2/3 md:w-2/3 max-900:w-[60%] lg:w-full xl:w-full m-auto  flex gap-4 p-4  items-center "
                >
                  <div className="flex w-full justify-center sm:w-1/3 ">
                    <span className="text-xl max-md:text-base">
                      {item.dt_txt.split(" ")[1].slice(0, 5)} HS
                    </span>
                  </div>
                  <div className="flex w-full items-center sm:w-2/3  ">
                    <ImageLoader data={item} imgClassName="h-12 relative" />
                    <p className="uppercase w-full text-base max-md:text-sm ">
                      {item.weather[0].description}
                    </p>
                  </div>
                  <div className="flex  w-1/2 sm:w-1/3 justify-center ">
                    <div className="flex flex-col max-md:text-base">
                      <span>{parseInt(item.main.temp)} °C</span>
                    </div>
                  </div>
                  <div className="flex gap-3 w-1/2 justify-center max-xl:hidden">
                    <DropletIcon />
                    <div className="flex flex-col">
                      <span>{item.main.humidity}%</span>
                    </div>
                  </div>
                  <div className="flex gap-3 w-1/2 justify-center max-xl:hidden">
                    <WindIcon />
                    <div className="flex flex-col">
                      <span>{item.wind.speed} km/h</span>
                    </div>
                  </div>
                  <div className="flex gap-3 w-1/2 justify-center max-xl:hidden">
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
