// Import other pages in order to export them together
import Features from './features';
import Pricing from './pricing';
import Resources from './resources';

// Import required dependencies
import React from "react";
import Hero from "../components//Hero";
import HomePageHeroImage from "../assets/home-page-hero-img.svg"; // Import the image
import UrlShortener from "../components/UrlShortener";
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
    <Hero
      title="More than just shorter links"
      description="Build your brand's recognition and get detailed insights on how your links are performing."
      buttonText="Get Started"
      imgURL={HomePageHeroImage} />
      <UrlShortener/>
      <Footer />
      </>
  );
};

// Default export for the Home component
export default Home;

// Named exports for other components
export { Features, Pricing, Resources };
