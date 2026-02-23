import { Link } from "react-router-dom";
import {
  LinkedinIcon,
  GithubIcon,
  WebsiteIcon,
  BackIcon,
} from "../../utilities";
import { Buttons } from "../../components";

const AboutUs = () => {
  return (
    <div className="overflow-hidden max-sm:overflow-auto">
      <header className="relative w-full">
        <div className="mt-[4rem] flex items-center justify-center gap-x-[4rem]">
          <Link to="/">
            {" "}
            <img src="./logo.png" alt="logo" className="w-[300px]" />
          </Link>
        </div>
      </header>

      <main className="mt-[3rem] flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-[2rem] text-2xl font-bold">Our Team</h1>
        <div className="flex gap-8 max-sm:mb-[1rem] max-sm:flex-col">
          <div className="flex h-[26rem] w-[18rem] min-w-[15rem] flex-col gap-4 rounded-lg bg-gray-100 transition-all hover:-translate-y-2 hover:shadow-lg">
            <img
              src="./ale.jpg"
              alt="caripela"
              className="h-[65%] w-full object-cover"
            />
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold">Alejandro Agra</span>
              <span className="text-sm opacity-60">Full Stack Developer</span>
            </div>
            <div className="mt-auto flex justify-center gap-6 pb-4">
              <a
                href="https://www.linkedin.com/in/alejandro-agra/"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 transition-colors hover:bg-blue-400"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/aleagra"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 transition-colors hover:bg-blue-400"
              >
                <GithubIcon />
              </a>
              <a
                href="#"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 transition-colors hover:bg-blue-400"
              >
                <WebsiteIcon />
              </a>
            </div>
          </div>

          <div className="flex h-[26rem] w-[18rem] min-w-[15rem] flex-col gap-4 rounded-lg bg-gray-100 transition-all hover:-translate-y-2 hover:shadow-lg">
            <img
              src="./lucas.jpeg"
              alt="caripela"
              className="h-[65%] w-full object-cover"
            />
            <div className="flex flex-col text-center">
              <span className="text-xl font-bold">Lucas Pereyra</span>
              <span className="text-sm opacity-60">Frontend Developer</span>
            </div>
            <div className="mt-auto flex justify-center gap-6 pb-4">
              <a
                href="https://www.linkedin.com/in/lucaspereyradev/"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 transition-colors hover:bg-blue-400"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/lucaspereyradev"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 transition-colors hover:bg-blue-400"
              >
                <GithubIcon />
              </a>
              <a
                href="https://lucaspereyradev.github.io/portfolio/"
                target="_blank"
                className="rounded-full bg-slate-200 p-2 transition-colors hover:bg-blue-400"
              >
                <WebsiteIcon />
              </a>
            </div>
          </div>
        </div>

        <Buttons
          classContainer="mb-8 flex items-center gap-4 px-2  md:justify-center xl:my-12 xl:justify-start"
          classBtn1="bg-blue-500 text-white/95"
          iconBtn1={<BackIcon />}
          textBtn1="Back to home"
          pathBtn1="/"
          classBtn2="hidden"
        />
      </main>
    </div>
  );
};

export default AboutUs;
