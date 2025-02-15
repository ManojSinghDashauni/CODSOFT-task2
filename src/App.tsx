import {
  Header,
  About,
  Projects,
  Contact,
  Footer,
} from "./components/index";
import HeroSection from "./components/subComponents/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
        <About />
        <Projects />
        <Contact />
      <Footer />
    </>
  );
}

export default App;
