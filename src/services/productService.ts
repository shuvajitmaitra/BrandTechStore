import axios, { AxiosError } from 'axios';
import { Product } from '../types/productTypes';

const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

export const handleProductServiceError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;

    if (!axiosError.response) {
      return 'No internet connection. Please check your network and try again.';
    }

    return (
      axiosError.response.data?.message ||
      'Unable to load products right now. Please try again.'
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Something went wrong while loading products.';
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get<Product[]>(PRODUCT_API_URL);
    return data;
  } catch (error) {
    throw new Error(handleProductServiceError(error));
  }
};
