import React, { useState } from "react";
import menu from "../../assets/Component 126.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white font-sans">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-medium tracking-wide">
          Elementum
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
  <li className="cursor-pointer hover:text-purple-600">Home</li>
  <li className="cursor-pointer hover:text-purple-600">Studio</li>
  <li className="cursor-pointer hover:text-purple-600">Services</li>
  <li className="cursor-pointer hover:text-purple-600">Contact</li>
  <li className="cursor-pointer hover:text-purple-600">FAQs</li>
</ul>

        {/* Mobile Menu Icon */}
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={menu}
            alt="menu"
            className="w-5 h-5 object-contain"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="cursor-pointer hover:text-purple-600">Home</li>
            <li className="cursor-pointer hover:text-purple-600">Studio</li>
            <li className="cursor-pointer hover:text-purple-600">Services</li>
            <li className="cursor-pointer hover:text-purple-600">Contact</li>
            <li className="cursor-pointer hover:text-purple-600">FAQs</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;