export const API_BASE_URL = 'https://fakestoreapi.com';

export const API_TIMEOUT = 30000; // 30 seconds

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};

export type ApiError = {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
};

export const handleApiError = (error: any): ApiError => {
  if (error.response) {
    // Server responded with a status code outside of 2xx range
    return {
      status: error.response.status,
      message: error.response.data.message || 'An error occurred',
      errors: error.response.data.errors,
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      status: 503,
      message: 'Network error - no response received',
    };
  } else {
    // Something happened in setting up the request
    return {
      status: 500,
      message: error.message || 'An unexpected error occurred',
    };
  }
}; 