import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Techs from "./components/Techs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import NavBarScroll from "./utils/NavBarScroll";
import Footer from "./components/Footer";

function App() {
  window.onload = NavBarScroll;
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education/>
      <Projects />
      <Techs />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
