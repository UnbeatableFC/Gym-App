import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/home";
import Benefits from "./scenes/benefits/Benefits";
import OurClasses from "./scenes/ourclass/OurClasses";
import ContactUs from "./scenes/contact/ContactUs";
import Footer from "./scenes/footer/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopPage={isTopPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage ={setSelectedPage}/>
      <ContactUs setSelectedPage= {setSelectedPage}/>
      <Footer />
    </div>

    
  );
};

export default App;
