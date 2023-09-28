import "./App.css";
import CompaniesLogo from "./components/companiessection/CompaniesLogo";
import Cardssection from "./components/cardssection/Cardssection";
import Herosection from "./components/herosection/Herosection";
import Navbar from "./components/navbar/Navbar";

import HeroSectiontwo from "./components/herosectiontwo copy/HeroSectiontwo";
import HeroSectionThree from "./components/herosectionthree copy/HeroSectionThree";
import Portfoliosection from "./components/portfoliosection/Portfoliosection";
import TestimonialSection from "./components/testimonialsection/TestimonialSection";
import ContactSection from "./components/contactsection/ContactSection";
import Barsection from "./components/barsection/Barsection";
import Footersection from "./components/footersection/Footersection";


function App() {
  const navList = {
    home:"Home",
    casestudies :"Case Studies",
    blog : "Blog",
    services : "Services",
    contact : "Contact",
  };
  return (
    <>
      <Navbar navList ={navList}/>
      <Herosection />
      <CompaniesLogo />
      <HeroSectiontwo />
      <Cardssection />
      <HeroSectionThree />
      <Portfoliosection />
      <TestimonialSection />
      <ContactSection />
      <Barsection/>
      <Footersection/>
    </>
  );
}

export default App;
