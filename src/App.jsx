import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './App.css'
import Features from "./components/Features"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Newletter from "./components/Newletter"
import Footer from "./components/Footer"

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Features />
        <About />
        <Pricing /> 
        <Newletter />
        <Footer />
    </>
  )
}

export default App
