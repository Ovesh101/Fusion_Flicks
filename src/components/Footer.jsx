import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cover bg-dark-charcoal bg-center text-light-gray py-10" style={{ backgroundImage: 'url(/Images/video.png)' }}>
      <div className="container mx-auto px-4">
        {/* First Row: Logo and Social Media Icons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="Brand Logo" className="h-10 mr-2" />
            <span className="text-2xl font-bold">Brand Name</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><Facebook className="text-xl hover:text-golden-brown" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="text-xl hover:text-golden-brown" /></a>
  
          </div>
        </div>
        <hr className="border-t border-gray-600 mb-6" />

        {/* Second Row: Quick Links, Our Services, Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Our Services</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Service 1</a></li>
              <li><a href="#" className="hover:underline">Service 2</a></li>
              <li><a href="#" className="hover:underline">Service 3</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Info</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <hr className="border-t border-gray-600 mb-6" />

        {/* Third Row: Copyright and Policy Links */}
        <div className="flex justify-between items-center">
          <div>&copy; {new Date().getFullYear()} Brand Name. All Rights Reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
