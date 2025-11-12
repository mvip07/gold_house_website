import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Collection from "./pages/Collection"
import Story from "./pages/Story"
import Certification from "./pages/Certification"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"

function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    )
}

export default App
