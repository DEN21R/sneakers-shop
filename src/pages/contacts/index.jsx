import {
  Container,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import { useState } from 'react'
import facebookImg from '../../assets/icons/faceBlue.svg'
import twitterImg from '../../assets/icons/x.svg'
import snapImg from '../../assets/icons/snapchat.svg'

function Contacts() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      name,
      email,
      message,
    }
    setMessage('')
    setName('')
    setEmail('')
    console.log(formData)
  }
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth: '1420px',
        mb: 10,
      }}
    >
      <Typography variant="h2" mt={6.25} fontWeight={700}>
        Контакты
      </Typography>
      <Divider sx={{ mt: 6.25, mb: 14.5 }} />

      <Box
        component="ul"
        sx={{
          pl: 3,
          margin: 0,
          mb: 8,
          fontSize: '18px',
          fontWeight: 400,
          color: '#00000080',
        }}
      >
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: '717px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
            <TextField
              variant="outlined"
              placeholder="Ваш email"
              value={email}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  backgroundColor: '#FAFAFA',
                },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Ваше имя"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  backgroundColor: '#FAFAFA',
                },
              }}
            />
          </Box>

          <TextField
            variant="outlined"
            multiline
            fullWidth
            placeholder="Введите сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
                backgroundColor: '#FAFAFA',
              },
              mt: 2,
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#090D1A',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 600,
              px: '25px',
              py: '21px',
              alignSelf: 'flex-end',
            }}
          >
            Отправить
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: '#FAFAFA',
            borderRadius: '10px',
            pt: '18px',
            pb: '72px',
            px: '65px',
          }}
        >
          <Typography
            mb={5}
            sx={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#000000B2',
              textAlign: 'center',
            }}
          >
            Найдите нас:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            <a href="https://www.snapchat.com/">
              <img src={snapImg} alt="snapchat" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebookImg} alt="facebook" />
            </a>
            <a href="https://x.com/">
              <img src={twitterImg} alt="twitter" />
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export default Contacts
