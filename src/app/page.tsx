import Image from "next/image";
import Searchbar from "./components/searchbar";
import CardContainer from "./components/cardContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-20">
      <div className="text-3xl font-sans font-semibold text-slate-700">
        Welcome to Weather App
      </div>
      <div className="text-slate-400 pt-2">
        Search for a city to get the weather
      </div>
      <Searchbar />
      <CardContainer />
    </div>
  );
}
