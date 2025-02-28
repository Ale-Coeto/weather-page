"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { WeatherData } from "./types";

interface CitiesContextType {
    cities: WeatherData[];
    setCities: (cities: WeatherData[]) => void;
    addCity: (city: WeatherData) => void;
    removeCity: (city: string) => void;
}

const CityContext = createContext<CitiesContextType>({
    cities: [],
    setCities: () => {},
    addCity: () => {},
    removeCity: () => {}
});

export function CityContextProvider({ children }: { children: ReactNode }) {
    const [cities, setCities] = useState<WeatherData[]>([]);

    const addCity = (city: WeatherData) => {
        if (!cities.some((c) => c.name === city.name)) {
          setCities([...cities, city]);
        }
      };

    const removeCity = (city: string) => {
        setCities(cities.filter((c) => c.name !== city));
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

