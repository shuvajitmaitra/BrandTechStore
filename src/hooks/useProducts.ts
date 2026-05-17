import React, { useEffect } from 'react';
import { getProducts } from '@/services/productService';
import { useAppDispatch } from '@/redux/hooks';
import {
  clearErrorMessage,
  setErrorMessage,
  setLoading,
  setProducts,
} from '@/redux/slices/productSlice';

const useProducts = () => {
  const dispatch = useAppDispatch();

  const loadProducts = async () => {
    dispatch(setLoading(true));
    dispatch(clearErrorMessage());

    try {
      const products = await getProducts();
      dispatch(setProducts(products));
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to load products right now. Please try again.';

      dispatch(setErrorMessage(message));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    loadProducts,
  };
};

export default useProducts;
