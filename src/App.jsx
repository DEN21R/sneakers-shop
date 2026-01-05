import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="appMain">
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
