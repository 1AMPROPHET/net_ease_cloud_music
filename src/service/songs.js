import {request} from './axios'

// 歌曲信息
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 歌曲url
export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}
// 歌词
export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}

// 歌曲的版权
export function checkCopyright(id) {
  return request({
    url: '/check/music',
    params: {
      id
    }
  })
}

// 创建歌的类
export class Song {
  constructor(songDetail, songUrl, songlyric) {
    this.id = songDetail.id
    this.name = songDetail.name
    this.time = songDetail.dt
    this.pic = songDetail.al.picUrl
    this.url = songUrl.url
    this.artist = songDetail.ar
    this.lyric = songlyric
  }
}