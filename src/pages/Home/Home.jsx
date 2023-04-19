import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WeatherContext } from '../../context/WeatherContext';
import { Navbar, Weather } from '../../components';
import { WorldIcon } from '../../utilities';

function Home() {
    const { data } = useContext(WeatherContext);

    return (
        <>
            <section className="w-full h-full lg:overflow-hidden">
                <Navbar color="bg-gradient-to-r from-blue-500 to-blue-700" />
                <main className="w-full h-full flex relative flex-col-reverse lg:flex-row justify-end">
                    <div className="w-full mt-10 lg:w-[50%] lg:px-[8rem] lg:pt-[5rem] flex flex-col lg:gap-y-[6rem] px-8">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="font-bold text-5xl max-lg:text-center 1353:text-[4em] 1xl:text-[5em] 1600:text-[6.5em]">
                                We Know The Future!
                            </h1>
                            <div className="text-center text-sm 2xl:text-[1em] 1600:text-[1.2em]">
                                <p>We are the weather forecast system.</p>
                                <p>
                                    We are a weather forecasting system.Our experts check the
                                    information with the most modern satellite equipment and
                                    powerfull servers. And they whit give you the most accurate
                                    results.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-12 flex-col items-center px-2 mb-8">
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
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 -z-10 py-[2rem] flex">
                        <Weather data={data} />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Home;
