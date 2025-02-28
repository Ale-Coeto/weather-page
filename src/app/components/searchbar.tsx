"use client";

import { useState } from "react";
import { useCities } from "../utils/context";
import { WeatherData } from "../utils/types";
import LoadingScreen from "./loadingScreen";
import toast from "react-hot-toast";


const Searchbar = () => {
    const [city, setCity] = useState("");
    const { addCity } = useCities();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        setLoading(true);
        fetch(`/api/weather?city=${city}`)
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error("City not found or server issue");
                }

                const data = await res.json();

                if (data.error) {
                    toast.error(data.error);
                    throw new Error(data.error);
                }

                addCity(data);
            })
            .catch((err) => {
                toast.error("City not found")
            })
            .finally(() => {
                setLoading(false);
            });


        setCity("");
        event.preventDefault();
    }

    return (
        <>
            <div className="px-10">
                <form onSubmit={handleSubmit} className="p-10 flex flex-row gap-3">
                    <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full min-w-80 bg-white rounded-lg p-1 border border-slate-200 text-slate-700 outline-sky-300" />
                    <button type="submit" className="bg-blue-500 px-2 py-1 rounded-lg">
                        Search
                    </button>
                </form>
            </div>
            {loading && (
                <LoadingScreen />
            )}
        </>
    )
}

export default Searchbar;