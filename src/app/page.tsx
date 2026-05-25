import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FQA from "./sections/FQA";
import GoUpBtn from "./components/GoUpBtn";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ScrollSection from "./components/ScrollSection";
import Services from "./sections/Services";
import Status from "./sections/Status";
import Testmonials from "./sections/Testmonials";
import Work from "./sections/Work";

const Home = () => {
  return (
    <div>
      <GoUpBtn />
      <Header />
      <ScrollSection>
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <About />
      </ScrollSection>
      <ScrollSection>
        <Status />
      </ScrollSection>
      <ScrollSection>
        <Services />
      </ScrollSection>
      <ScrollSection>
        <Work />
      </ScrollSection>
      <ScrollSection>
        <Testmonials />
      </ScrollSection>
      <ScrollSection>
        <FQA />
      </ScrollSection>
      <ScrollSection>
        <Contact />
      </ScrollSection>
      <ScrollSection>
        <Footer />
      </ScrollSection>
    </div>
  );
};

export default Home;
