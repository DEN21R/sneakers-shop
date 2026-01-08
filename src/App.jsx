import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './pages/main'
import Cart from './pages/cart'

function App() {
  return (
    <div className="appMain">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
