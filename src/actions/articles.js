// 引入请求文件
import request from '../untils/requset'
import { API_ARTICLES, API_CHANNELS } from '../constant/api'
export function getArticle (params) {
  return request({
    url: API_ARTICLES,
    params
  })
}
export function getChannel () {
  return request({
    url: API_CHANNELS
  })
}
