import { IoIosClose } from "react-icons/io";
import { useCities } from "../utils/context";
import { WeatherData } from "../utils/types";
import WeatherIcon from "./weatherIcon";

const Card = ({ city }: { city: WeatherData }) => {
    const { removeCity } = useCities();
    const handleRemove = () => {
        removeCity(city.name);
    }

    return (
        <div className="flex flex-col bg-white p-4 rounded-lg relative min-w-52">
            <button onClick={handleRemove} className="absolute top-3 right-3">
                <IoIosClose className="text-slate-500 text-xl hover:text-slate-400" />
            </button>

            <div className="text-slate-700 font-sans font-semibold">
                {city.name}
            </div>

            <div className="pt-2">
                <div className="text-slate-500 text-lg">
                    {city.main.temp} °C
                </div>
                <div className="text-neutral-300 text-sm">
                    {city.main.temp_max} -
                    {city.main.temp_min} °C
                </div>
            </div>

            <div className="flex flex-row items-center gap-2 text-slate-400 pt-2">
                <WeatherIcon weatherCode={city.weather[0].icon} />
                <div>
                    {city.weather[0].description}
                </div>
            </div>

        </div>
    )
}

export default Card;