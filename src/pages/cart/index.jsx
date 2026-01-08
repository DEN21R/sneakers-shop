import {
  Box,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@mui/material'
import { useEffect } from 'react'
import basket from '../../assets/icons/basket.svg'
import { fetchCart, removeFromCart } from '../../rerdux/actions'
import { connect } from 'react-redux'

function Cart({ dispatch, cartItems }) {
  useEffect(() => {
    fetchCart(dispatch)
  }, [dispatch])

  const remove = (id) => {
    removeFromCart(dispatch, id)
  }
  const total = cartItems.reduce((sum, i) => sum + Number(i.price), 0)
  return (
    <Box sx={{ px: 31.25 }}>
      <Typography mt={6} sx={{ fontSize: 36, fontWeight: 700 }}>
        Корзина
      </Typography>

      <Divider sx={{ mt: 4, mb: 6 }} />

      {cartItems.length === 0 ? (
        <Typography sx={{ fontSize: 36, fontWeight: 700 }}>
          Корзина пуста
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 11,
            }}
          >
            {cartItems.map((el) => (
              <Card
                key={el.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 3,
                  gap: 4,
                  backgroundColor: '#FAFAFA',
                }}
              >
                <CardMedia
                  component="img"
                  image={el.image}
                  alt={el.name}
                  sx={{
                    width: 197,
                    height: 90,
                    objectFit: 'cover',
                  }}
                />
                <Divider orientation="vertical" flexItem />
                <Typography
                  sx={{ fontSize: '24px', fontWeight: 400, color: '#000000' }}
                >
                  {el.name}
                </Typography>
                <CardContent>
                  <Typography
                    sx={{ fontSize: '14px', fontWeight: 500, color: '#666666' }}
                  >
                    Цена:
                  </Typography>
                  <Typography
                    sx={{ fontSize: '24px', fontWeight: 700, color: '#000000' }}
                  >
                    {el.price} €
                  </Typography>
                </CardContent>
                <IconButton onClick={() => remove(el.id)}>
                  <img src={basket} />
                </IconButton>
              </Card>
            ))}
          </Box>
          <Card sx={{ py: 2, px: 3, backgroundColor: '#FAFAFA' }}>
            <Typography
              sx={{ textAlign: 'center', fontSize: 36, fontWeight: 700, mb: 3 }}
            >
              Итого
            </Typography>
            {cartItems.map((el) => (
              <Typography
                mb={2}
                sx={{ fontSize: '24px', fontWeight: 400, color: '#000000' }}
              >
                {el.name}
              </Typography>
            ))}
            <Divider sx={{ mt: 4, mb: 6 }} />
            <Typography
              sx={{ fontSize: '14px', fontWeight: 700, color: '#2D2D2D' }}
            >
              Цена:
            </Typography>
            <Typography
              sx={{ fontSize: '24px', fontWeight: 700, color: '#000000' }}
            >
              {total} €
            </Typography>
          </Card>
        </Box>
      )}
    </Box>
  )
}
const mapStateToProps = (state) => ({ cartItems: state.items })
export default connect(mapStateToProps)(Cart)
