import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WeatherContext } from '../../context/WeatherContext';
import { Navbar, Weather } from '../../components';
import { WorldIcon } from '../../utilities';

function Home() {
    const { data } = useContext(WeatherContext);

    return (
        <>
            <section className="w-full  h-screen overflow-hidden ">
                <Navbar color="bg-transparent" />
                <main className="w-full h-full flex relative">
                    <div className="w-[50%] px-[8rem] pt-[5rem] flex flex-col gap-y-[6rem]">
                        <div className="flex flex-col gap-y-4">
                            <h1 className="font-bold text-[6.5em]">We Know The Future!</h1>
                            <div className="text-[1.2em]">
                                <p>We are the weather forecast system.</p>
                                <p>
                                    We are a weather forecasting system.Our experts check the
                                    information with the most modern satellite equipment and
                                    powerfull servers. And they whit give you the most accurate
                                    results.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-x-6">
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
                    <div className=" right-0 w-[52%] h-full bg-gradient-to-r from-blue-500 to-blue-700  -skew-x-[10deg] translate-x-[5rem] -translate-y-[6rem] -z-10 flex justify-center items-center">
                        <Weather data={data} className="absolute" />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Home;
