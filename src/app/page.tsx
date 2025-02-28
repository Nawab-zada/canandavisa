import Image from "next/image";
import Aboutus from "./components/Aboutus";
import Sardar from "./components/Sardar";
import Scammer from "./components/Scammer";
import FeatureCards from "./components/Visacatogor";
export default function Home() {
  return (
    <div className="h-[100px]">
    
     <Aboutus/>
     <Sardar/>
     <Scammer/>
     <FeatureCards/>
    </div>
  );
}
