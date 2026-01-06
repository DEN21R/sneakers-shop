import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './pages/main'

function App() {
  return (
    <div className="appMain">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
