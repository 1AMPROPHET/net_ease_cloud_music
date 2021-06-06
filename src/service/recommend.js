import {request} from './axios'

export function getTopBanner() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommend() {
  return request({
    url: '/personalized'
  })
}

export function getNewRelease(limit, offset) {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(id) {
  return request({
    url: '/top/list',
    params: {
      id
    }
  })
}

export function getList() {
  return request({
    url: '/toplist'
  })
}