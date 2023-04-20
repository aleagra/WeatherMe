import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WeatherContext } from '../../context/WeatherContext';
import { Navbar, Weather } from '../../components';
import { WorldIcon } from '../../utilities';

function Home() {
    const { data } = useContext(WeatherContext);

    return (
        <>
            <section className="w-full h-full xl:overflow-hidden">
                <Navbar color="bg-gradient-to-r from-blue-500 to-blue-700 xl:from-transparent xl:to-transparent xl:absolute xl:top-0" />
                <main className="w-full h-full xl:h-screen md:h-fit flex relative flex-col-reverse xl:flex-row justify-end xl:justify-between xl:items-center">
                    <div className="w-full mt-10 xl:w-[50%] xl:px-[4rem] flex flex-col xl:gap-y-[10rem] px-8 1440:px-[8rem]">
                        <div className="flex flex-col gap-y-4 1440:gap-y-8">
                            <h1 className="font-bold text-5xl xl:text-7xl md:text-6xl max-xl:text-center">
                                We Know The Future!
                            </h1>
                            <div className="max-xl:text-center text-sm xl:text-lg md:text-base 1600:pr-10">
                                <p>We are the weather forecast system.</p>
                                <p>
                                    We are a weather forecasting system.Our experts check the
                                    information with the most modern satellite equipment and
                                    powerfull servers. And they whit give you the most accurate
                                    results.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-12 flex-col items-center px-2 mb-8 md:mb-8 xl:mb-0 md:flex-row md:justify-center xl:justify-start xl:mt-0 xl:px-0">
                            <Link to="/week">
                                <button className="btn flex gap-2 items-center bg-black text-white/95">
                                    <WorldIcon /> See the week weather
                                </button>
                            </Link>
                            <Link to="/aboutus" className="btn bg-white">
                                About Us
                            </Link>
                        </div>
                    </div>
                    {/* <div className="lg:right-0 w-full h-full py-4 lg:w-[52%] lg:h-full bg-gradient-to-r from-blue-500 to-blue-700  lg:-skew-x-[10deg] lg:translate-x-[5rem] lg:-translate-y-[6rem] -z-10 flex justify-center items-center">
                        <Weather data={data} className="absolute" />
                    </div> */}
                    <div className="xl:relative max-xl:bg-gradient-to-r from-blue-500 to-blue-700 -z-10 py-[2rem] flex xl:w-[60%] 1440:w-[50%] xl:h-full xl:efecto-diagonal ">
                        <Weather data={data} />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Home;
