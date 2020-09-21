import axios from 'axios'
// import $store from '@/store/index'
// import { Message } from 'element-ui'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeOut: 5000
  })
  // instance.interceptors.response.use(function (response) {
  //   const res = response.data
  //   if (res.status === 200) {
  //     return res.data
  //   }
  // else {
  //     Message.warning(res.msg)
  //     return Promise.reject(res)
  //   }
  // }, (error) => {
  //   const res = error.response
  //   Message.error(res.data.message)
  //   return Promise.reject(error)
  // })

  // 发送真正的网络请求
  return instance(config)
}
