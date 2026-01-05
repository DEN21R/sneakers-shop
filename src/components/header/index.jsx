import { AppBar, Toolbar, Typography } from '@mui/material'

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ fontSize: '20px', fontWeight: 900 }}>
          Сникер - магазин
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Header
