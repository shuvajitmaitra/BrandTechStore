import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/productTypes';
import { getProducts } from '../../services/productService';

type ProductState = {
  products: Product[];
  filteredProducts: Product[];
  favorites: Product[];
  searchText: string;
  loading: boolean;
  refreshing: boolean;
  errorMessage: string;
};

const getFilteredProducts = (products: Product[], searchText: string) => {
  const normalizedSearch = searchText.trim().toLowerCase();

  if (!normalizedSearch) {
    return products;
  }

  return products.filter(product =>
    product.title.toLowerCase().includes(normalizedSearch),
  );
};



const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  favorites: [],
  searchText: '',
  loading: false,
  refreshing: false,
  errorMessage: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearErrorMessage: state => {
      state.errorMessage = '';
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.loading = false;
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.filteredProducts = getFilteredProducts(
        state.products,
        action.payload,
      );
    },
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.favorites.findIndex(
        favorite => favorite.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        state.favorites.splice(existingIndex, 1);
        return;
      }

      state.favorites.unshift(action.payload);
    },
  },
});

export const {
  clearErrorMessage,
  filterProducts,
  setErrorMessage,
  setLoading,
  setProducts,
  toggleFavorite,
} = productSlice.actions;

export default productSlice.reducer;
