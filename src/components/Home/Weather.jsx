import React from 'react';
import { DropletIcon, SunIcon, WindIcon } from '../../utilities';

function Weather({ data }) {
    return (
        <>
            {data && (
                <div className="text-white flex flex-col text-center gap-[2rem] mt-12 skew-x-[10deg]">
                    <div className="flex flex-col gap-[20rem]">
                        <span className="text-4xl">
                            <span className="text-9xl">{parseInt(data.main.temp)}</span> °C
                        </span>
                        <span className="text-7xl capitalize font-bold">
                            {data.weather[0].description}
                        </span>
                    </div>
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
