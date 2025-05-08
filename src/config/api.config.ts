export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT),
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
} as const; 