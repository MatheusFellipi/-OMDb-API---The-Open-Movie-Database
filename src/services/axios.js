import axios from "axios"

const axio = axios.create({
  baseURL: 'http://www.omdbapi.com'
})

export default axio;