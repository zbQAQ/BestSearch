import { useEffect, PropsWithChildren } from 'react'
import { useParams } from "react-router-dom"
import { Box, Typography, Grid } from "@mui/material"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../store"
import { productSelector, setSearchText, fetchProductList } from "../../store/product"
import SearchItemCard, { SearchItemSkeleton } from '../../components/SearchItemCard/SearchItemCard'
import { IProductTrend } from '../../api/product'

const GridItem = (props: PropsWithChildren) => (
  <Grid item xs={12} sm={6} md={3} lg={3}>
    {props.children}
  </Grid>
)

export default function SearchPage() {
  const { keyword } = useParams()
  const dispatch = useAppDispatch()
  const { loading, data } = useSelector(productSelector)

  useEffect(() => {
    if (keyword) {
      const realKeywork = keyword.replace(/\+/g, ' ')
      // 同步 searchText
      dispatch(setSearchText(realKeywork))
      dispatch(fetchProductList(realKeywork))
    }
  }, [keyword, dispatch])

  return (
    <Box className="search-page-container">
      <Typography sx={{ my: "1.6rem", fontSize: "1.2rem" }}>Related product trends</Typography>
      <Grid container spacing={2}>
      {
        loading ? (
          Array(4).fill('').map((val, index) => (
            <GridItem key={index} >
              <SearchItemSkeleton />
            </GridItem>
          ))
        ) : 
        data.map((val: IProductTrend) => (
          <GridItem key={val.name} >
            <SearchItemCard {...val} />
          </GridItem>
        ))
      }
      </Grid>
    </Box>
  )
}