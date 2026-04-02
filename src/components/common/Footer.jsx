import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#a9c1ad] text-black font-sans">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center relative">
        <h1 className="gebril text-3xl md:text-5xl font-normal leading-tight">
          Subscribe to <br /> our newsletter
        </h1>

        <p className="text-sm mt-4 text-gray-700">
          To make your stay special and even more memorable
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition">
          Subscribe Now
        </button>

        {/* Right Shape */}
        <div className="hidden md:block absolute right-10 top-10 w-30 h-30bg-gradient-to-br from-purple-500 to-purple-700 rounded-full"
     style={{
       clipPath: "polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%)"
     }}
></div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mx-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl  mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-800">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Terms & Policies</h3>
          <ul className="space-y-2 text-gray-800">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-gray-800">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-800">
            <li>1498w Fluton ste, STE</li>
            <li>2D Chicago, IL 63687.</li>
            <li>(123) 456789000</li>
            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-700 pb-6">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;