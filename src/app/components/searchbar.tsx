"use client";

import { useState } from "react";
import { useCities } from "../utils/context";


const Searchbar = () => {
    const [city, setCity] = useState("");
    // const existingCities = ["monterrey", "guadalajara"]
    const { addCity } = useCities();

    const handleSubmit = (event: React.FormEvent) => {
        console.log(city)
        addCity(city);
        setCity("");
        event.preventDefault();
    }

    return (
        <div className="px-10">
            <form onSubmit={handleSubmit} className="p-10 flex flex-row gap-3">
                <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-white rounded-lg p-1 border border-slate-200 text-slate-700 outline-sky-300" />
                <button type="submit" className="bg-blue-500 px-2 py-1 rounded-lg">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Searchbar;