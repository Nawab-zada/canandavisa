import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-black text-white py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm mb-6">
              Canada Visa Apply is a trusted immigration consultancy, offering
              expert guidance for Canada Immigration Visas. Our team has
              extensive experience in immigration visa and citizenship law,
              specializing in Skilled & Business Migration and study abroad
              opportunities.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-sm">Toronto</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+1902-706-2766</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">Sardarjagmohansinghnanda@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Useful Links Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-red-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/Aboutus" className="text-sm hover:text-red-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/visacotogory" className="text-sm hover:text-red-500 transition-colors">
                    Visa Categories
                  </Link>
                </li>
                <li>
                  <Link href="/Contactus" className="text-sm hover:text-red-500 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* We're Available Column */}
          <div>
            <h2 className="text-xl font-bold mb-4">We're Available</h2>
            <div className="space-y-2">
              {[
                { day: 'Monday', hours: '10 am - 6:30 pm' },
                { day: 'Tuesday', hours: '10 am - 6:30 pm' },
                { day: 'Wednesday', hours: '10 am - 6:30 pm' },
                { day: 'Thursday', hours: '10 am - 6:30 pm' },
                { day: 'Friday', hours: '10 am - 6:30 pm' },
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between border-b border-gray-800 pb-1">
                  <span className="text-sm">{schedule.day} :</span>
                  <span className="text-sm">{schedule.hours}</span>
                </div>
              ))}
              <div className="flex justify-between pt-1">
                <span className="text-sm">Saturday | Sunday</span>
                <span className="text-sm">Off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-red-600 text-white p-4 text-center relative">
        <p className="text-sm">© 2024, Canada-Visa-Apply. All Rights Reserved.</p>
        
        {/* WhatsApp Button */}
        
      </div>
    </footer>
  );
};

export default Footer;