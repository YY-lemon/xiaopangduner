import axios from 'axios'
export const loginApi = () => {
  return axios.get('/login').then(res => res.data)
}
