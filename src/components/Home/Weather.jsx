import React from 'react';
import { DropletIcon, SunIcon, WindIcon } from '../../utilities';
import ImageLoader from '../ImageLoader';

function Weather({ data }) {
    return (
        <>
            {data && (
                // <div className="max-lg:relative max-lg:mt-[20rem] text-white flex flex-col text-center gap-[2rem] lg:skew-x-[10deg] lg:w-[50%]">
                //     <div className="flex flex-col gap-[25rem] justify-center items-center">
                //         <span className="relative text-4xl ml-auto z-[10] opacity-30 top-[2rem]">
                //             <span className="text-8xl">{parseInt(data.main.temp)}</span>°C
                //         </span>
                //         <span className="text-7xl capitalize font-bold whitespace-nowrap">
                //             {data.weather[0].description}
                //         </span>
                //     </div>
                //     <ImageLoader
                //         data={data}
                //         divClassName="relative bottom-[35rem]"
                //         imgClassName="pulse min-h-[5rem] h-[30rem] max-h-[30rem]"
                //     />
                //     <hr className="border-white/20" />
                //     <div className="flex text-left gap-[2rem] justify-center">
                //         <div className="flex gap-3 justify-start">
                //             <DropletIcon />
                //             <div className="flex flex-col pr-8 border-r border-white/20">
                //                 <span className="opacity-[.7]">Humidity</span>
                //                 <span>{data.main.humidity}%</span>
                //             </div>
                //         </div>
                //         <div className="flex gap-3 justify-start">
                //             <WindIcon />
                //             <div className="flex flex-col pr-8 border-r border-white/20">
                //                 <span className="opacity-[.7]"> Wind</span>
                //                 <span>{data.wind.speed} Km/h</span>
                //             </div>
                //         </div>
                //         <div className="flex gap-3 justify-start">
                //             <SunIcon />
                //             <div className="flex flex-col">
                //                 <span className="opacity-[.7]">Feels like</span>
                //                 <span>{parseInt(data.main.feels_like)} °C</span>
                //             </div>
                //         </div>
                //     </div>
                // </div>

                <div className="w-full h-fit mt-auto">
                    <div className="flex flex-col gap-[1rem] justify-center items-center px-8">
                        <span className="opacity-30 ml-auto text-white">
                            <span className="text-6xl mr-1">{parseInt(data.main.temp)}</span>°C
                        </span>
                        <ImageLoader
                            data={data}
                            divClassName=""
                            imgClassName="min-h-[10rem] h-[10rem] "
                        />
                        <span className="my-4 font-bold capitalize text-white text-2xl">
                            {data.weather[0].description}
                        </span>
                    </div>

                    <div className="flex text-left gap-[1rem] justify-center text-white px-4">
                        <div className="flex gap-3 justify-start">
                            <DropletIcon />
                            <div className="flex flex-col pr-8 border-r border-white/20">
                                <span className="opacity-[.7] text-xs">Humidity</span>
                                <span className="text-sm">{data.main.humidity}%</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <WindIcon />
                            <div className="flex flex-col pr-8 border-r border-white/20">
                                <span className="opacity-[.7] text-xs"> Wind</span>
                                <span className="text-sm">{data.wind.speed} Km/h</span>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start">
                            <SunIcon />
                            <div className="flex flex-col">
                                <span className="opacity-[.7] text-xs">Feels like</span>
                                <span className="text-sm whitespace-nowrap">
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
