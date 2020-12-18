import axios from 'axios'
import repositories from './repositories'

// @ts-ignore
const URL: string = 'https://api.github.com'

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

export const API = {
  repositories,
}
