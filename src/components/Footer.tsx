import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Engine Rebuild", href: "/services/engine-rebuild" },
  { title: "Timing Chain Replacement", href: "/services/timing-chain-replacement" },
  { title: "Turbo Replacement", href: "/services/turbo-replacement" },
  { title: "Head Gasket Replacement", href: "/services/head-gasket-replacement" },
  { title: "Engine Repair", href: "/services/engine-repair" },
  { title: "Engine Replacement", href: "/services/engine-replacement" },
  { title: "Engine Swap", href: "/services/engine-swap" },
  { title: "Timing Belt Replacement", href: "/services/timing-belt-replacement" },
];

const engines = [
  { title: "Range Rover", href: "/engines/range-rover" },
  { title: "Land Rover", href: "/engines/land-rover" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-heading font-bold tracking-widest uppercase">
              Range Rover <span className="text-primary">Garage</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              The UK's premier independent specialist for Range Rover and Land Rover engine services. 
              Quality, precision, and excellence in every rebuild.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/rangerovergarage76/" 
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/rangerovergarage/" 
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands + Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {engines.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li><Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/get-quote" className="text-gray-400 hover:text-primary transition-colors text-sm">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Call Us</span>
                  <a href="tel:+441708592377" className="text-gray-300 hover:text-white transition-colors">01708 592377</a>
                  <a href="tel:+447477733313" className="text-gray-300 hover:text-white transition-colors">07477 733313</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Our Location</span>
                  <a 
                    href="https://www.google.com/maps/place/Range+Rover+Garage/@51.4741169,0.3034999,17z/data=!3m1!4b1!4m6!3m5!1s0x47d8b76dba1fd2e1:0xf0dc09e9187bf7f8!8m2!3d51.4741169!4d0.3034999!16s%2Fg%2F11sbv01n43" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-primary transition-colors italic"
                  >
                    UNIT 1 Hedley Ave, Grays RM20 4EL
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email Us</span>
                  <a href="mailto:sales@rangerovergarage.co.uk" className="text-gray-300 hover:text-white transition-colors">sales@rangerovergarage.co.uk</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} Range Rover Garage. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
