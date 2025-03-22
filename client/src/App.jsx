
import './App.css'
import Attend from './components/Attend'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Theme from './components/Theme'

import Hero from './pages/Hero'

function App() {


  return (
   <div >
   <Navbar/>
   <Hero/>
   <Theme/>
   <Attend/>
   <Banner/>
   <Footer/>
   </div>
  )
}

export default App
