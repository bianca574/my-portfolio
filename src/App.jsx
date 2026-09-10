import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App