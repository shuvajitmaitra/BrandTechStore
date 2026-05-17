import axios from 'axios';
import { Product } from '../types/productTypes';

const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const { data } = await axios.get<Product[]>(PRODUCT_API_URL);
  return data;
};
