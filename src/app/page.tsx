import Image from "next/image";

import Sardar from "./components/Sardar";
import Scammer from "./components/Scammer";
import Features from "./components/Steps"; 
import { Freevisa } from "./components/Freevisa"; 
import Footer from "./components/Footer";
import VisaBanner from "./components/Apply";
import WhatsAppButton from "./components/Whatsappbutton";
import StickyApplyButton from "./components/Stickybutton";
import Aboutus from "@/app/Aboutus/page";
import FeatureCards from "./visacotogory/page";
import Contact from "./Contactus/page";

export default function Home() {
  return (
    <div className="">
    
     <VisaBanner/>
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
