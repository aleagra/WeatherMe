import React from "react";
import { Link } from "react-router-dom";
import {
  LinkedinIcon,
  GithubIcon,
  WebsiteIcon,
  PeopleIcon,
  BackIcon,
} from "../../utilities";

const AboutUs = () => {
  return (
    <div className="overflow-hidden h-screen max-sm:overflow-auto">
      <header className="w-full">
        <div className="flex gap-x-[4rem] justify-center items-center mt-[4rem]">
          <Link to="/">
            {" "}
            <img src="./logo.png" alt="logo" className="w-[300px]" />
          </Link>
        </div>
      </header>

      <main className="flex w-full flex-col h-full justify-center items-center max-sm:mt-[6rem]">
        <h1 className="font-bold text-2xl mb-[2rem]">Our Team</h1>
        <div className="max-sm:mb-[4rem] flex gap-8 max-sm:flex-col">
          <div className="h-[26rem] w-[18rem] min-w-[15rem] bg-gray-100 rounded-lg flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-2">
            <img
              src="./ale.jpg"
              alt="caripela"
              className="w-full h-[65%] object-cover"
            />
            <div className="flex flex-col text-center">
              <span className="font-bold text-xl">Alejandro Agra</span>
              <span className="opacity-60 text-sm">Full Stack Developer</span>
            </div>
            <div className="flex gap-6 justify-center mt-auto pb-4">
              <a
                href="https://www.linkedin.com/in/alejandro-agra/"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 hover:bg-blue-400 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/aleagra"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 hover:bg-blue-400 transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="#"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 hover:bg-blue-400 transition-colors"
              >
                <WebsiteIcon />
              </a>
            </div>
          </div>

          <div className="h-[26rem] w-[18rem] min-w-[15rem] bg-gray-100 rounded-lg flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-2">
            <img
              src="./lucas.jpeg"
              alt="caripela"
              className="w-full h-[65%] object-cover"
            />
            <div className="flex flex-col text-center">
              <span className="font-bold text-xl">Lucas Pereyra</span>
              <span className="opacity-60 text-sm">Frontend Developer</span>
            </div>
            <div className="flex gap-6 justify-center mt-auto pb-4">
              <a
                href="https://www.linkedin.com/in/lucaspereyradev/"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 hover:bg-blue-400 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/lucaspereyradev"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 hover:bg-blue-400 transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://lucaspereyradev.github.io/portfolio/"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 hover:bg-blue-400 transition-colors"
              >
                <WebsiteIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4  items-center px-2  md:mb-8  md:justify-center xl:justify-start xl:my-12">
          <Link to="/">
            <button className="btn flex gap-2 items-center bg-blue-500 text-white/95">
              <BackIcon /> Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
