import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import ProgressSections from "../components/home/ProgressSections";
import WhatWeOffer from "../components/home/WhatWeOffer";
import Testimonial from "../components/home/Testimonial";

export default function Landing() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col font-sans">
        
        {/* Hero Section */}
        <Hero />

        <ProgressSections />

        <WhatWeOffer />

        <Testimonial />

        {/* (Optional) Other sections add here later */}
        {/* <Features /> */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}