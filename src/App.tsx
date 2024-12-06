import About from "./components/about/About";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
