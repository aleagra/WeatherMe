import React from 'react';
import { DropletIcon, SunIcon, WindIcon } from '../../utilities';
import ImageLoader from '../ImageLoader';

function Weather({ data }) {
    return (
        <>
            {data && (
                <div className="w-full h-fit mt-auto xl:my-auto">
                    <div className="flex flex-col gap-[1rem] justify-center items-center px-8">
                        <span className="opacity-30 ml-auto xl:text-3xl text-white md:pr-10">
                            <span className="text-6xl mr-1 md:text-8xl">
                                {parseInt(data.main.temp)}
                            </span>
                            °C
                        </span>
                        <ImageLoader
                            data={data}
                            divClassName=""
                            imgClassName="min-h-[10rem] h-[10rem] md:h-[20rem] xl:h-[22rem] pulse"
                        />
                        <span className="my-4 font-bold capitalize text-white text-2xl md:text-4xl">
                            {data.weather[0].description}
                        </span>
                    </div>

                    <div className="flex text-left gap-[1rem] md:gap-[2rem] justify-center text-white px-4">
                        <div className="flex gap-3 justify-start">
                            <DropletIcon />
                            <div className="flex flex-col pr-8 border-r border-white/20">
                                <span className="opacity-[.7] text-xs md:text-base">Humidity</span>
                                <span className="text-sm md:text-lg">{data.main.humidity}%</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <WindIcon />
                            <div className="flex flex-col pr-8 border-r border-white/20">
                                <span className="opacity-[.7] text-xs md:text-base"> Wind</span>
                                <span className="text-sm md:text-lg">{data.wind.speed} Km/h</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <SunIcon />
                            <div className="flex flex-col">
                                <span className="opacity-[.7] text-xs md:text-base">
                                    Feels like
                                </span>
                                <span className="text-sm md:text-lg whitespace-nowrap">
                                    {parseInt(data.main.feels_like)} °C
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Weather;
