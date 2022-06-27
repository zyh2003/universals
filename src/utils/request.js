import axios from 'axios'
import md5 from 'md5'
import loading from './loading'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 把token加入请求头中, 不需要可以删除下面4句代码
    loading.open()

    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    return config
  },
  function (error) {
    // 对请求错误做些什么
    loading.close()
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 解决token错误或是过期
    // 把response的data返回给客户端, 不需要可以删除下面1句代码
    loading.close()
    return response
  },
  function (error) {
    // 对响应错误做点什么
    loading.close()
    return Promise.reject(error)
  }
)

// const request = (options) => {
//   if (options.method.toLowerCase() === 'get') {
//     options.params = options.data || {}
//   }
//   service(options)
// }
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default service
