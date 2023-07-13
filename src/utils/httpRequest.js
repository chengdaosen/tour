import axios from 'axios'


const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * get请求参数处理
 * @param {*} params 参数对象
 */
http.adornParams = (params = {}) => {
  return params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, contentType = 'json') => {
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
