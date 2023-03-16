import React from 'react';
import { NavLink } from 'react-router-dom';

// icons
import { MapPin } from '../../utilities';

function Navbar() {
    return (
        <header className="w-full h-[6rem] bg-transparent border-b border-solid">
            <nav className="h-full w-full px-[8rem] flex justify-between text-black items-center">
                <div className="flex gap-x-[4rem]">
                    Logo
                    <NavLink to="/">About us</NavLink>
                </div>
                <div className="flex gap-x-[6rem]">
                    <div className="flex gap-x-[2rem]">
                        <select
                            className="px-[1.5rem] py-[.5rem] bg-slate-200 rounded-xl text-center"
                            name="months"
                            id="months"
                        >
                            <option value="">April</option>
                            <option value="">September</option>
                        </select>
                        <select
                            className="px-[1.5rem] py-[.5rem] bg-slate-200 rounded-xl"
                            name="days"
                            id="days"
                        >
                            <option value="">20</option>
                        </select>
                    </div>
                    <div className="w-[13rem] bg-slate-200 rounded-xl relative flex">
                        <img src="./algo.svg" className="abolute" />
                        <input
                            className="w-full pl-[3rem] py-[.5rem] px-[1rem] outline-none"
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
