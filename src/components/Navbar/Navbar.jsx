import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MapPin from '../../utilities/icons/MapPin';

// icons

function Navbar() {
    const [city, setCity] = useState(null);

    return (
        <header className="w-full h-[6rem] bg-transparent">
            <nav className="h-full w-full px-[8rem] flex justify-between text-black items-center">
                <div className="flex gap-x-[4rem]">
                    Logo
                    <NavLink to="/">About us</NavLink>
                </div>
                <div className="flex gap-x-[6rem]">
                    <div className="flex gap-x-[2rem]">
                        <select
                            className=" py-4 px-10 bg-white rounded-2xl outline-none font-medium appearance-none"
                            name="months"
                            id="months"
                        >
                            <option value="">April</option>
                            <option value="">September</option>
                            <option value="">April</option>
                            <option value="">September</option>
                            <option value="">April</option>
                            <option value="">September</option>
                        </select>
                        <select
                            className="px-[1rem] bg-white rounded-2xl outline-none font-medium appearance-none"
                            name="days"
                            id="days"
                        >
                            <option value="">20</option>
                        </select>
                    </div>
                    <div className=" text-white  relative flex">
                        <MapPin />
                        <input
                            className="w-full pl-8  text-white py-[.5rem]  outline-none bg-[#8671CF]  rounded-2xl placeholder:text-white"
                            type="text"
                            placeholder="Search your location"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
