import { useState, useContext } from 'react';
import ImageLoader from './ImageLoader';
import { WeatherContext } from '../context/WeatherContext';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { DropletIcon, SunIcon, WindIcon } from '../utilities';

const Cards = ({ data, dates }) => {
    const { loading } = useContext(WeatherContext);
    const [active, setActive] = useState(false);
    const [details, setDetails] = useState([]);

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCardIndex(index);
    };

    const getDayOfWeek = (dateString) => {
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const dateParts = dateString.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);
        const dateObject = new Date(year, month, day);
        const dayOfWeek = dateObject.getDay();
        return daysOfWeek[dayOfWeek];
    };
    if (loading && active) {
        debugger;
        setActive(false);
    }

    return (
        <>
            <Splide
                className="max-xl:m-[-3rem]"
                hasTrack={false}
                options={{
                    perPage: 4,
                    rewind: false,
                    perMove: 1,
                    gap: '3rem',
                    padding: '1.5rem',
                    pagination: false,
                    breakpoints: {
                        764: {
                            perPage: 1,
                            gap: '1rem',
                        },

                        1200: {
                            perPage: 2,
                            gap: '2rem',
                            padding: '0rem',
                        },
                        1600: {
                            perPage: 3,
                            gap: '3rem',
                        },
                    },
                }}
            >
                <SplideTrack className="m-auto max-xl:py-8 max-lg:w-[90%] sm:w-full md:w-[65%] 900:w-[85%] lg:w-[88%] 2xl:w-full">
                    {dates.map((date, index) => {
                        const items = data[date].map((item) => item); // Guarda los items en un nuevo array
                        const itemsZero = items[0];
                        return (
                            <SplideSlide key={index}>
                                <div
                                    className={`h-[27rem] cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 px-[1rem] py-4  text-white  shadow-md transition-colors xl:rounded-2xl ${
                                        selectedCardIndex === index
                                            ? 'bg-gradient-to-r from-blue-700 to-blue-900'
                                            : '' // Cambia el color de fondo si la card está seleccionada
                                    }`}
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
                                                imgClassName="pulse w-full h-[11rem] "
                                            />
                                        </div>
                                        <div className="mx-auto mt-auto flex flex-col">
                                            <span className="mb-6 text-5xl font-bold">
                                                {parseInt(itemsZero.main.temp)} °C
                                            </span>
                                            <div className="flex gap-x-4">
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-sm opacity-80">
                                                        Humidity
                                                    </span>
                                                    <span className="text-lg font-bold">
                                                        {itemsZero.main.humidity}{' '}
                                                        <span className="text-sm font-light">
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-sm opacity-80">
                                                        Feels like
                                                    </span>
                                                    <span className="text-lg font-bold">
                                                        {parseInt(itemsZero.main.feels_like)}{' '}
                                                        <span className="text-sm font-light">
                                                            °C
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-y-1">
                                                    <span className="text-sm opacity-80">Wind</span>
                                                    <span className="text-lg font-bold">
                                                        {itemsZero.wind.speed}{' '}
                                                        <span className="text-sm font-light">
                                                            km/h
                                                        </span>
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
                            className="h-6 w-6 stroke-blue-700"
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
                            className="h-6 w-6 stroke-blue-700"
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

            {active && !loading && (
                <div className="flex justify-center">
                    <div className="w-full text-lg sm:px-6 md:px-16">
                        <div className="h-fit w-full items-center rounded-lg bg-blue-500 text-white">
                            {details.map((item, index) => (
                                <div
                                    key={index}
                                    className="m-auto flex w-full items-center gap-4 p-4 max-900:w-[60%] max-md:w-2/3 max-sm:w-[33%] sm:w-[60%] md:w-2/3 lg:w-full xl:w-[92%] "
                                >
                                    <div className="flex w-full justify-center max-2xl:w-1/2">
                                        <span className="text-xl max-md:text-base">
                                            {item.dt_txt.split(' ')[1].slice(0, 5)} HS
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
