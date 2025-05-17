import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom' // Add Navigate
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Add catch-all route */}
        </Routes>
      </div>
      <footer className='footer'>
        <p>© 2025 Hasibur Rahman</p>
      </footer>
    </>
  )
}

export default App