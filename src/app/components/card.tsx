import { IoIosClose } from "react-icons/io";
import { useCities } from "../utils/context";

interface CardProps {
    city: string,
    temperature: number
}

const Card = ({ city, temperature }: CardProps) => {
    const { removeCity } = useCities();
    const handleRemove = () => {
        removeCity(city);
    }

    return (
        <div className="flex flex-col bg-white p-4 rounded-lg relative min-w-60">
            <button onClick={handleRemove} className="absolute top-3 right-3">
                <IoIosClose className="text-slate-500 text-xl" />
            </button>

            <div className="text-slate-700 font-sans font-semibold">
                {city}
            </div>
            <div>
                {temperature}
            </div>
        </div>
    )
}

export default Card;