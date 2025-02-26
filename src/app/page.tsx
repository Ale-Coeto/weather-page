import Image from "next/image";
import Searchbar from "./components/searchbar";
import CardContainer from "./components/cardContainer";

export default function Home() {
  return (
    <div>
      <Searchbar />
      <CardContainer />
    </div>
  );
}
