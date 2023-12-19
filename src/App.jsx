import "./app.scss"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Particles from "./components/particles/Particle";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <Particles/>
    <section className="welcome" id="Homepage">
      <Navbar />
      <Intro/>
    </section>
    <section id="About"><About /></section>
    <section  id="Services"><Parallax type="services"/></section>
    <section><Services /> </section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
