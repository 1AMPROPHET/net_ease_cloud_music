import {request} from './axios'

export function getHotAlbums() {
  return request({
    url: '/album/newest'
  })
}