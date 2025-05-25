import { apiClient } from './client';
import { ApiResponse } from '../config';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const productsApi = {
  getAllProducts: async (): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get<Product[]>('/products');
    return {
      data: response.data,
      status: response.status,
    };
  },

  getProduct: async (id: number): Promise<ApiResponse<Product>> => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return {
      data: response.data,
      status: response.status,
    };
  },
}; 