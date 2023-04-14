import React from 'react';
import { DropletIcon, SunIcon, WindIcon } from '../../utilities';
import ImageLoader from '../ImageLoader';

function Weather({ data }) {
    return (
        <>
            {data && (
                <div className="text-white flex flex-col text-center gap-[2rem] skew-x-[10deg] w-[50%]">
                    <div className="flex flex-col gap-[25rem] justify-center items-center">
                        <span className="relative text-4xl ml-auto z-[10] opacity-30 top-[2rem]">
                            <span className="text-8xl">{parseInt(data.main.temp)}</span>°C
                        </span>
                        <span className="text-7xl capitalize font-bold whitespace-nowrap">
                            {data.weather[0].description}
                        </span>
                    </div>
                    <ImageLoader
                        data={data}
                        divClassName="relative bottom-[35rem]"
                        imgClassName="pulse h-[30rem] max-h-[30rem]"
                    />
                    <hr className="border-white/20" />
                    <div className="flex text-left gap-[2rem] justify-center">
                        <div className="flex gap-3 justify-start">
                            <DropletIcon />
                            <div className="flex flex-col pr-8 border-r border-white/20">
                                <span className="opacity-[.7]">Humidity</span>
                                <span>{data.main.humidity}%</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <WindIcon />
                            <div className="flex flex-col pr-8 border-r border-white/20">
                                <span className="opacity-[.7]"> Wind</span>
                                <span>{data.wind.speed} Km/h</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <SunIcon />
                            <div className="flex flex-col">
                                <span className="opacity-[.7]">Feels like</span>
                                <span>{parseInt(data.main.feels_like)} °C</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Weather;
