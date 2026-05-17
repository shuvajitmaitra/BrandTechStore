import { Product } from '../types/productTypes';

export type RootStackParamList = {
  Home: undefined;
  ProductDetail: { product: Product };
  Favorites: undefined;
};
