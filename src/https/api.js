import axios from 'axios'

const API = axios.create({
  baseURL: `https://api-dev.hesetazegi.com/`,
})

export default API
