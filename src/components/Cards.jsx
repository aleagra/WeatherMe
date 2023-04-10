import ImageLoader from './Home/ImageLoader';

const Cards = ({ data, dates }) => {
    return (
        <>
            <div className="flex flex-wrap gap-4">
                {dates.map((date, index) => {
                    const items = data[date].map((item) => item); // Guarda los items en un nuevo array
                    const itemsZero = items[0];
                    console.log(items);
                    return (
                        <div
                            key={index}
                            className="w-[10rem] h-[25rem] mr-4 py-4 rounded-2xl bg-blue-500 text-white"
                        >
                            <div className="flex gap-1 flex-col text-center h-full w-full">
                                <span>{date}</span>
                                <ImageLoader
                                    data={itemsZero}
                                    divClassName="mt-6"
                                    imgClassName="w-full h-[10rem]"
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
                    );
                })}
            </div>
        </>
    );
};

export default Cards;
