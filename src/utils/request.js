/**
 * 请求模块
 */
import axios from 'axios'
import store from '@/store'
import JSONBig from 'json-bigint'

// JSON.parse()
// JSON.stringify()

// JSONBig可以处理数据中超出JavaScript 安全整数范围的问题
// JSONBig.parse() // JSON 格式字符串转为 JavaScript 对象
// JSONBig.stringify() // 把JavaScript 对象转为 JSON 格式字符串

const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://toutiao.itheima.net/',

  // 自定义后端返回的原始数据
  // data: 后端返回的原始数据 JSON格式的字符串
  transformResponse: [function (data) {
    try {
      return JSONBig.parse(data)
    } catch (err) {
      return data
    }
  }]
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 请求发起会经过这里
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  // console.log('hello' + config)
  // 注意：这里务必要返回 config 配置对象，负责请求就停在这里出不去了
  return config
}, function (error) {
  // 如果请求出错了(还没有发出去) 会进入这里
  return Promise.reject(error)
})
// 响应拦截器

export default request
