import ImageLoader from './Home/ImageLoader';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Cards = ({ data, dates }) => {



   

    return (
        <>
      
 

  <Splide  options={ {
    perPage: 4,
    rewind : false  ,
    perMove: 1,
    gap:"2rem",
padding:"1.5rem",
// breakpoints:{
//     1440:{
//         perPage:3,
//         gap:"3rem",
//     },
//     640:{
//         perPage:1
//     }
// }

  } }
>
          
                {dates.map((date, index) => {
                    const items = data[date].map((item) => item); // Guarda los items en un nuevo array
                    const itemsZero = items[0];
                    console.log(items);
                    return (
                        <SplideSlide>
                        <div
                            key={index}
                            className=" px-[1rem] h-[30rem]  py-4 rounded-2xl border border-white shadow-lg  text-white hover:bg-white/10 cursor-pointer"
                        >
                            <div className="flex gap-1 flex-col text-center h-full w-full">
                                <span>{date}</span>
                                <ImageLoader
                                    data={itemsZero}
                                    divClassName="mt-6"
                                    imgClassName="w-full h-[16rem]"
                                />
                                <div className="flex flex-col mt-auto mx-auto">
                                    <span className="mb-6 text-5xl font-bold">
                                        {parseInt(itemsZero.main.temp)} °C
                                    </span>
                                    <div className="flex gap-x-4">
                                        <div className="flex flex-col gap-y-1">
                                            <span className="text-sm opacity-80">Humidity</span>
                                            <span className="text-lg font-bold">
                                                {itemsZero.main.humidity}{' '}
                                                <span className="text-sm font-light">%</span>
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <span className="text-sm opacity-80">Feels like</span>
                                            <span className="text-lg font-bold">
                                                {parseInt(itemsZero.main.feels_like)}{' '}
                                                <span className="text-sm font-light">°C</span>
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <span className="text-sm opacity-80">Wind</span>
                                            <span className="text-lg font-bold">
                                                {itemsZero.wind.speed}{' '}
                                                <span className="text-sm font-light">km/h</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SplideSlide>
                    );
                })}
     
            </Splide>   
        </>
    );
};

export default Cards;
