
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Crops from "./components/Crops/Crops"
import Solutions from "./components/Solutions/Solutions"
import Footer from "./footer/Footer"
import ProfileCard from "./components/Profile/Profile"

const App =() =>{
  return (
    <>
    <Navbar />
    {/* <ProfileCard /> */}
    <Home />
    <Crops />
    <Solutions />
    <Footer />
    
    </>
  )
}

export default App;