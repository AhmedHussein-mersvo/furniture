import axios from 'axios'

/** Shared Axios client  -  point baseURL at your API when ready */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})
