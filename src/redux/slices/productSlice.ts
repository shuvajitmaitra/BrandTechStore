import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/productTypes';

type ProductState = {
  favorites: Product[];
};

const initialState: ProductState = {
  favorites: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
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

export const { toggleFavorite } = productSlice.actions;

export default productSlice.reducer;
