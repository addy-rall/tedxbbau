import "./App.css";
import Attend from "./components/Attend";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Hero from "./pages/Hero";
import Graph from "./components/Graph";  
import TeamPage from './components/TeamPage';
import SpeakerSection from "./components/SpeakerSection";
import { Route, Routes } from "react-router-dom";
import Line from "./components/Line";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
              <Navbar />
             
              <Graph />
              
              <Hero />
              
              <Theme />
              <Line/>
              <Attend />
              <Line/>
              <SpeakerSection />
              <Line/>
              <Banner />

              <Line/>
              <Footer />
            </div>
          </>
        }
      />
      <Route path="/team" element={
     <>
  <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>

      
        <Navbar/>
        <TeamPage />
        <Line/>
        <Footer/>
  </div>
     </>
        }
        
         />
    </Routes>
  );
}

export default App;
