import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FQA from "./sections/FQA";
import GoUpBtn from "./components/GoUpBtn";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Status from "./sections/Status";
import Testmonials from "./sections/Testmonials";
import Work from "./sections/Work";

const Home = () => {
  return (
    <div>
      <GoUpBtn />
      <Header />
      <Hero />
      <About />
      <Status />
      <Services />
      <Work />
      <Testmonials />
      <FQA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
