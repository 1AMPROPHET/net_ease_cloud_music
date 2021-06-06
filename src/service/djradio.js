import {request} from './axios'

export function getDjRadioCatelist() {
  return request({
    url: '/dj/catelist'
  })
}
export function getDjRadioRecommend(type) {
  return request({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

export function getDjHotRadios() {
  return request({
    url: '/dj/hot'
  })
}

export function getHotDj(type) {
  return request({
    url: '/dj/toplist',
    params: {
      type
    }
  })
}