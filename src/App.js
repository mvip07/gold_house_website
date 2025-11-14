import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Story from './pages/Story'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Certification from './pages/Certification'
import { ToastContainer } from 'react-toastify'
import { LanguageProvider } from './context/LanguageContext'

function App() {
    return (
        <LanguageProvider>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/story" element={<Story />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certification" element={<Certification />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </LanguageProvider>
    )
}

export default App
