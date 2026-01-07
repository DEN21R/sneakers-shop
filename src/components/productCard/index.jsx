import { CardContent, Card, Typography, CardMedia } from '@mui/material'

function ProductCard({ product }) {
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
        alt={product.title}
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
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#666666' }}>
          Цена:
        </Typography>
        <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#000000' }}>
          {product.price} €
        </Typography>
      </CardContent>
    </Card>
  )
}
export default ProductCard
