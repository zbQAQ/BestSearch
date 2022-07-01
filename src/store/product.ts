import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { getProductList } from "../api/product"
import { IProductTrend } from "../api/product"

// Define a type for the slice state
interface IProductState {
  searchText: string
  data: IProductTrend[]
  loading: boolean
}

// Define the initial state using that type
const initialState: IProductState = {
  searchText: "",
  data: [],
  loading: false,
}

export const fetchProductList = createAsyncThunk(
  'product/fetchList',
  async (keyword: string) => {
    try {
      const response = await getProductList(keyword)
      return response.data.product_trends
    } catch(e) {
      console.error("error fetch product/fetchList", e)
      return []
    }
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    clearSearchText: (state) => {
      state.searchText = ""
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, state => {
        state.loading = true
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProductList.rejected, state => {
        state.loading = false
      })
  },
})

export const { setSearchText, clearSearchText} = productSlice.actions
export const productSelector = (state: RootState) => state.product
export default productSlice.reducer