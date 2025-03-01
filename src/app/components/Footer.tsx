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
                <span className="text-sm">1981 Kennedy Rd</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+16722320318</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">info@canada-visa-apply.com</span>
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
                  <Link href="/about-us" className="text-sm text-red-500 hover:text-red-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/visa-categories" className="text-sm hover:text-red-500 transition-colors">
                    Visa Categories
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-sm hover:text-red-500 transition-colors">
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
        <div className="fixed right-6 bottom-6 md:bottom-12">
          <Link href="https://wa.me/16722320318" className="flex items-center justify-center bg-green-500 h-12 w-12 rounded-full hover:bg-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;