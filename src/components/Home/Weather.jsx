import React from 'react';
import { DropletIcon, SunIcon, WindIcon } from '../../utilities';
import ImageLoader from '../ImageLoader';

function Weather({ data }) {
    return (
        <>
            {data && (
                <div className="mt-auto h-fit w-full xl:my-auto">
                    <div className="flex flex-col items-center justify-center gap-[1rem] px-8 xl:relative">
                        <span className="z-10 text-white opacity-30 max-xl:ml-auto md:mt-10 xl:absolute xl:bottom-[18rem] xl:right-16 2xl:right-32 2xl:bottom-[25rem] 2xl:text-3xl">
                            <span className="mr-1 text-6xl md:text-8xl">
                                {parseInt(data.main.temp)}
                            </span>
                            °C
                        </span>
                        <ImageLoader
                            data={data}
                            divClassName=""
                            imgClassName="min-h-[10rem] h-[10rem] md:h-[20rem] xl:h-[18rem] 2xl:h-[22rem] pulse"
                        />
                        <span className="my-4 text-2xl font-bold capitalize text-white md:text-4xl">
                            {data.weather[0].description}
                        </span>
                    </div>

                    <div className="flex justify-center gap-[1rem] px-4 text-left text-white md:gap-[2rem]">
                        <div className="flex justify-start gap-3">
                            <DropletIcon />
                            <div className="flex flex-col border-r border-white/20 pr-8">
                                <span className="text-xs opacity-[.7] md:text-base">Humidity</span>
                                <span className="text-sm md:text-lg">{data.main.humidity}%</span>
                            </div>
                        </div>
                        <div className="flex justify-start gap-3">
                            <WindIcon />
                            <div className="flex flex-col border-r border-white/20 pr-8">
                                <span className="text-xs opacity-[.7] md:text-base"> Wind</span>
                                <span className="text-sm md:text-lg">{data.wind.speed} Km/h</span>
                            </div>
                        </div>
                        <div className="flex justify-start gap-3">
                            <SunIcon />
                            <div className="flex flex-col">
                                <span className="text-xs opacity-[.7] md:text-base">
                                    Feels like
                                </span>
                                <span className="whitespace-nowrap text-sm md:text-lg">
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
