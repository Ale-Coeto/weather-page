import { IconType } from "react-icons";
import { BsCloudRainFill, BsCloudRainHeavyFill, BsCloudsFill, BsFillCloudFog2Fill } from "react-icons/bs";
import { IoCloudy, IoMoon, IoPartlySunny, IoSnow, IoSunny, IoThunderstormSharp } from "react-icons/io5";

export const weatherIcons: Record<string, IconType> = {
    "01d": IoSunny,
    "02d": IoPartlySunny,
    "03d": IoCloudy,
    "04d": BsCloudsFill,
    "09d": BsCloudRainFill,
    "10d": BsCloudRainHeavyFill,
    "11d": IoThunderstormSharp,
    "13d": IoSnow,
    "50d": BsFillCloudFog2Fill,
    "01n": IoMoon,
    "02n": IoPartlySunny,
    "03n": IoCloudy,
    "04n": BsCloudsFill,
    "09n": BsCloudRainFill,
    "10n": BsCloudRainHeavyFill,
    "11n": IoThunderstormSharp,
    "13n": IoSnow,
    "50n": BsFillCloudFog2Fill,
};