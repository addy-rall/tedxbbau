import "./App.css";
import Attend from "./components/Attend";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Hero from "./pages/Hero";
import Graph from "./components/Graph"; 
import SpeakerSection from "./components/SpeakerSection";
 

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <Navbar />
      <Graph/>
      <Hero />
      <Theme />
      <Attend /> 
      <SpeakerSection />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
