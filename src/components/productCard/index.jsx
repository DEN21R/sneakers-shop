import { CardContent, Card, Typography, CardMedia, Box } from '@mui/material'
import { connect } from 'react-redux'
import { addToCart } from '../../rerdux/actions'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'

function ProductCard({ dispatch, product }) {
  const addCart = () => {
    addToCart(dispatch, product)
  }

  return (
    <Card
      sx={{
        maxWidth: 386,
        width: '100%',
        borderRadius: 5,
        border: '2px solid #00000026',
        p: 5,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 220,
          objectFit: 'cover',
        }}
      />
      <Typography
        sx={{ fontSize: 24, fontWeight: 400, color: '#000000', mb: 5 }}
      >
        {product.name}
      </Typography>

      <CardContent
        sx={{
          p: 0,
          '&:last-child': {
            pb: 0,
          },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#666666' }}>
            Цена:
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#000000' }}>
            {product.price} €
          </Typography>
        </Box>

        <IconButton
          onClick={addCart}
          sx={{
            width: 37,
            height: 37,
            border: '1px solid #E0E0E0',
            color: '#9E9E9E',
            transition: 'all 0.2s ease',

            '&:hover': {
              backgroundColor: '#000',
              color: '#fff',
              borderColor: '#000',
            },
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  )
}
export default connect()(ProductCard)
