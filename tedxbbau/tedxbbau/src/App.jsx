import "./App.css";
import Attend from "./components/Attend";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Hero from "./pages/Hero";
import Graph from "./components/Graph";  
import TeamPage from "./components/TeamPage";
import SpeakerSection from "./components/SpeakerSection";
import Location from "./components/Location";
import { Route, Routes } from "react-router-dom";
import Line from "./components/Line";
import ChiefSection from "./components/ChiefSection";

function App() {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route
        path="/"
        element={
          <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
            <Navbar />
            <Graph />
            <Hero />
            <ChiefSection/>
            <Theme />
            <Line />
            <Attend />
            <Line />
            <SpeakerSection />
            <Line />
            <Banner />
            <Line />
            <Footer />
          </div>
        }
      />

      {/* Team Page Route */}
      <Route
        path="/team"
        element={
          <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
            <Navbar />
            <TeamPage />
            <Line />
            <Location />
            <Line />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
