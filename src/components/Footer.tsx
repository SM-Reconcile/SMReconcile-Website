import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & Legal */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-3xl font-bold tracking-wider text-white">
              SMReconcile.
            </Link>
            <p className="text-zinc-400 text-center md:text-left text-sm leading-relaxed max-w-xs">
              Bridging the gap between Health and Sanitation with sustainable environmental solutions.
            </p>
            <div className="text-xs text-zinc-500 flex flex-col items-center md:items-start space-y-1 pt-2">
               <p><span className="font-semibold text-zinc-400">CIN:</span> U90009MH2017PTC291444</p>
               <p><span className="font-semibold text-zinc-400">GST:</span> 27AAYCS1749M1zd</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-center md:text-left text-sm">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <Link href="/services" className="hover:text-green-400 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link>
              <Link href="/#contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div className="text-center md:text-left">
                  <p className="text-white">Head Office</p>
                  <p className="text-zinc-400">601 Laxcon Plaza, Nerul Mumbai</p>
                  <p className="text-xs text-zinc-500 mt-1">Coordinating Offices: Andaman & Nicobar, Jharkhand, Manipur</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a href="tel:+919702029653" className="hover:text-white transition-colors">+91 9702029653</a>
              </div>
              
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                <a href="mailto:reconcile.enquiry@gmail.com" className="hover:text-white transition-colors">reconcile.enquiry@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        <hr className="my-8 border-zinc-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} SM Reconcile Environment Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
