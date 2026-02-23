import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Buttons, Navbar, Weather } from "../../components";
import { PeopleIcon, WorldIcon } from "../../utilities";

function Home() {
  const { data } = useContext(WeatherContext);

  return (
    <>
      <section className="h-screen w-full xl:overflow-hidden">
        <Navbar color="bg-gradient-to-r from-blue-500 to-blue-700 xl:from-transparent xl:to-transparent xl:absolute xl:top-0" />
        <main className="relative flex h-full w-full flex-col-reverse justify-end md:h-fit xl:h-screen xl:flex-row xl:items-center xl:justify-between">
          <div className="mt-10 flex w-full flex-col px-8 xl:w-[50%] xl:gap-y-[4rem] xl:px-[4rem] 1440:px-[8rem] 2xl:gap-y-[10rem]">
            <div className="flex flex-col gap-y-4 1440:gap-y-8">
              <h1 className="text-5xl font-bold max-xl:text-center md:text-6xl xl:text-7xl">
                We Know The Future!
              </h1>
              <div className="text-sm max-xl:text-center md:text-base xl:text-lg 1600:pr-10">
                <p>We are the weather forecast system.</p>
                <p>
                  We are a weather forecasting system.Our experts check the
                  information with the most modern satellite equipment and
                  powerfull servers. And they whit give you the most accurate
                  results.
                </p>
              </div>
            </div>

            <Buttons
              classContainer="mt-12 flex-col md:flex-row  xl:mt-0 xl:justify-start"
              classBtn1="bg-black text-white/95"
              iconBtn1={<WorldIcon />}
              textBtn1="See the week weather"
              pathBtn1="/week"
              classBtn2="bg-white"
              iconBtn2={<PeopleIcon />}
              textBtn2="About us"
              pathBtn2="/aboutus"
            />
          </div>

          <div className="xl:efecto-diagonal -z-10 flex from-blue-500 to-blue-700 py-[2rem] max-xl:bg-gradient-to-r xl:relative xl:h-full xl:w-[60%] 1440:w-[50%]">
            <Weather data={data} />
          </div>
        </main>
      </section>
    </>
  );
}

export default Home;
