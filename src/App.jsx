import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './pages/main'
import Cart from './pages/cart'
import Contacts from './pages/contacts'
import { Box } from '@mui/material'

function App() {
  return (
    <Box
      className="appMain"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
