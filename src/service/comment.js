import {request} from './axios.js'

export function getListComment(id) {
  return request({
    url: '/comment/playlist',
    params: {
      id
    }
  })
}