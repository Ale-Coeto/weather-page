"use client";

import { useCities } from "../utils/context";
import Card from "./card";

const CardContainer = () => {

    const { cities } = useCities();

    return (
        <div className="p-5 flex flex-wrap justify-center gap-10 ">
            {cities.map((city, key) => (
                <Card key={key} city={city} />
            ))}
        </div>
    )
}

export default CardContainer;