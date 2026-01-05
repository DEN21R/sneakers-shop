import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const menuNav = [
  {
    path: '/',
    title: 'Главная',
  },
  {
    path: '/cart',
    title: 'Корзина',
  },
  {
    path: '/contacts',
    title: 'Контакты',
  },
]

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#3B3C3D', px: 31.25, py: 5.4 }}
    >
      <Toolbar
        disableGutters
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: 900 }}>
          Сникер - магазин
        </Typography>
        <Box sx={{ display: 'flex', gap: 8 }}>
          {menuNav.map((el, index) => (
            <NavLink
              key={index}
              to={el.path}
              style={({ isActive }) => ({
                color: isActive ? '#FFFFFF' : '#FFFFFF80',
              })}
            >
              {el.title}
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Header
