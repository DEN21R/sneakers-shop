import { Box, Typography, Grid, Divider } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import News from '../../components/news'
import ProductCard from '../../components/productCard'

function Main() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responce = await axios.get(
          'https://691226ca52a60f10c820ce49.mockapi.io/productData'
        )
        setProducts(responce.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  return (
    <Box sx={{ px: 31.25 }}>
      <News />
      <Typography
        sx={{ fontSize: 36, fontWeight: 700, color: '#000000', mt: 9 }}
      >
        Товары
      </Typography>
      <Divider sx={{ mt: 4, mb: 6 }} />
      <Grid container justifyContent={'center'} spacing={16} pb={21}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default Main
