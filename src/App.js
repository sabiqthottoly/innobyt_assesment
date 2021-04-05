import './App.css';
import Header from './Components/Header';
import Cover from './Components/Cover';
import Intro from './Components/Intro';
import Benefits from './Components/Benefits';
import AboutIntro from './Components/AboutIntro';
import OurClients from './Components/OurClients';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Components/Footer';

AOS.init();

function App() {
  return (
    <div className="App">
      <Header/>
      <Cover/>
      <Intro/>
      <Benefits/>
      <AboutIntro/>
      <OurClients/>
      <Footer/>
    </div>
  );
}

export default App;
