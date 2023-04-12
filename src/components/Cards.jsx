import { useState } from "react";
import ImageLoader from "./Home/ImageLoader";
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
        }}
      >
        <SplideTrack>
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
                        imgClassName="w-full h-[11rem] "
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
        <div className="px-[4rem]">
          <div className="w-full h-fit bg-blue-500 rounded-lg text-white items-center">
            {details.map((item) => (
              <div className="w-full flex gap-10 p-[2rem] items-center">
                <div className="flex w-full justify-center">
                  <span className="text-xl">
                    {item.dt_txt.split(" ")[1].slice(0, 5)} HS
                  </span>
                </div>
                <div className="flex w-full items-center">
                  <ImageLoader data={item} imgClassName="h-[5rem]" />
                  <p className="uppercase w-full">
                    {item.weather[0].description}
                  </p>
                </div>

                {/* <div className="flex w-full justify-center">
                  <p className="uppercase">
                    {" "}
                    {parseInt(item.main.temp)} °C {console.log(item)}{" "}
                  </p>
                </div> */}
                {/* <div className="flex w-full justify-center ">
                  <p className="uppercase">{parseInt(item.main.feels_like)}</p>
                </div> */}
                <div className="flex w-full gap-3 justify-center">
                  <SunIcon />
                  <div className="flex  flex-col">
                    <span>{parseInt(item.main.temp)} °C</span>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <DropletIcon />
                  <div className="flex flex-col  ">
                    <span>{item.main.humidity}%</span>
                  </div>
                </div>
                <div className="flex w-full gap-3 justify-center">
                  <WindIcon />
                  <div className="flex flex-col ">
                    <span className="">{item.wind.speed} Km/h</span>
                  </div>
                </div>
                <div className="flex w-full gap-3 justify-center">
                  <SunIcon />
                  <div className="flex  flex-col">
                    <span>{parseInt(item.main.feels_like)} °C</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
