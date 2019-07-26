import axios from 'axios'
// const baseURL = 'https://www.easy-mock.com/mock/5d3ae5c46fa32d72383ea996/api' // api的base_url
const baseURL = 'https://easy-mock.com/mock/5cd03667adb0973be6a3d8d1/api'

axios.defaults.baseURL = baseURL

// 登录验证
export const loginApi = paramas => {
  return axios.post('/user/login', paramas).then(res => res.data)
}
