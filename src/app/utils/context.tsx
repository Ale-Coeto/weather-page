"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface CitiesContextType {
    cities: string[];
    setCities: (cities: string[]) => void;
    addCity: (city: string) => void;
    removeCity: (city: string) => void;
}

const CityContext = createContext<CitiesContextType>({
    cities: [],
    setCities: () => {},
    addCity: () => {},
    removeCity: () => {}
});

export function CityContextProvider({ children }: { children: ReactNode }) {
    const [cities, setCities] = useState<string[]>([]);

    const addCity = (city: string) => {
        if (!cities.includes(city)) {
            setCities([...cities, city]);
        }
    };

    const removeCity = (city: string) => {
        setCities(cities.filter((c) => c !== city));
    }

    return (
        <CityContext.Provider value={{ cities, setCities, addCity, removeCity }}>
            {children}
        </CityContext.Provider>
    )
}

export function useCities() {
    const context = useContext(CityContext);
    if (context === null) {
        throw new Error("No city context");
    }
    return context;
}

