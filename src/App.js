import { Route, Routes } from 'react-router-dom'

//style
import './App.css'

//component
import MainCard from './component/main-card/MainCard'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Resume from './component/resume/Resume'
import Works from './component/works/Works'
import Navbar from './component/navbar/Navbar'

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className='row'>
      <MainCard />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      </div>   
    </div>
  )
}

export default App
