import axios from 'axios'

// @ts-ignore
const URL: string = 'https://api.github.com'

export const axiosInstance = axios.create({
  baseURL: URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

export const API = {}
