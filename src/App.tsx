import About from "./components/about/About";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Portfolio />
    </div>
  );
}

export default App;
