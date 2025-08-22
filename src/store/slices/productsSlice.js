import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => getAllProducts(),
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.loading = false;
        state.error = "Api'dan ürünler alınırken hata oluştu";
      });
  },
});

export default productSlice.reducer;

