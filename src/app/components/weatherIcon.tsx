import { weatherIcons } from "../utils/icons";

const WeatherIcon = ({ weatherCode }: {weatherCode: string}) => {
    const IconComponent = weatherIcons[weatherCode];

    if (!IconComponent) {
        return <div>No icon found for {weatherCode}</div>;
    }

    return <IconComponent className="" />;
};

export default WeatherIcon;