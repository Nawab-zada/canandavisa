import Image from "next/image";
import Aboutus from "./components/Aboutus";
import Sardar from "./components/Sardar";
import Scammer from "./components/Scammer";
import FeatureCards from "./components/Visacatogor";
import Features from "./components/Steps"; 
import { Freevisa } from "./components/Freevisa"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CanadaVisaHero from "./components/Apply";
import WhatsAppButton from "./components/Whatsappbutton";
import StickyApplyButton from "./components/Stickybutton";
export default function Home() {
  return (
    <div className="h-[100px]">
     <CanadaVisaHero/>
     <Aboutus/>
     <Sardar/>
     <Scammer/>
     <FeatureCards/>
     <Features/>
     <Freevisa/>
     <Contact/>
     <Footer/>
     <WhatsAppButton/>
     <StickyApplyButton/>
     
     
    </div>

  );
}
