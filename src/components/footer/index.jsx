import { Box, TextField, Typography } from '@mui/material'
import facebookLogo from '../../assets/icons/facebook.svg'
import twitterLogo from '../../assets/icons/twitt.svg'
import instagramLogo from '../../assets/icons/inst.svg'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#3B3C3D',
        pt: 8.25,
        pb: 8,
        px: 31.25,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            sx={{
              color: '#FFFFFF',
              mb: 4,
              fontSize: '1.5rem',
              fontWeight: 400,
            }}
          >
            Контакты
          </Typography>
          <Typography sx={{ color: '#FFFFFF80', mb: 1 }}>
            8 800 000 00 00
          </Typography>

          <Typography sx={{ color: '#FFFFFF80' }}>
            emailexample@email.com
          </Typography>

          <Typography sx={{ mt: 12, color: '#FFFFFF80' }}>
            2024 Сникер-магазин. Все права защищены
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Box sx={{ display: 'flex', gap: 3 }}>
            <a href="https://www.facebook.com/">
              <img src={facebookLogo} alt="facebook" />
            </a>
            <a href="https://x.com/">
              <img src={twitterLogo} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagramLogo} alt="instagram" />
            </a>
          </Box>
          <TextField
            variant="standard"
            placeholder="Введите свой email:"
            sx={{
              fontSize: '20px',
              '& .MuiInput-underline:before': {
                borderBottomColor: '#FFFFFF80',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#FFFFFF',
              },
              width: '407px',
              input: {
                color: '#FFFFFF',
                '::placeholder': {
                  color: '#FFFFFF80',
                  opacity: 1,
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
export default Footer
