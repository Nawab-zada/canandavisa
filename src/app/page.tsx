import Image from "next/image";

import Sardar from "./components/Sardar";

import Features from "./components/Steps"; 
import { Freevisa } from "./components/Freevisa"; 
import Footer from "./components/Footer";

import WhatsAppButton from "./components/Whatsappbutton";
import StickyApplyButton from "./components/Stickybutton";
import Aboutus from "@/app/Aboutus/page";
import FeatureCards from "./visacotogory/page";
import Contact from "./Contactus/page";
import Scammer from "@/app/components/Scammer";
import CallToAction from "./components/Calltoaction";
import Banner from "./components/Apply";
export default function Home() {
  return (
    <div className="">
    
     <Banner/>
     <Aboutus/>
     <CallToAction/>
     <FeatureCards/>
     <Sardar/>
     <Scammer/>
     <Features/>
     <Freevisa/>
     <Contact/>
     <Footer/>
     <WhatsAppButton/>
     <StickyApplyButton/>
     
     
    </div>

  );
}
