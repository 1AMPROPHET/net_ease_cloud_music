import {request} from './axios'

export function getRankDetail(id) {
  return request({
    url: '/playlist/detail',
    params:{
      id
    }
  })
}

export function getAllList() {
  return request({
    url: '/toplist'
  })
}

export class listDetail {
  constructor(data) {
    this.coverImgUrl = data.coverImgUrl
    this.name = data.name
    this.updateTime = data.updateTime
    this.updateFrequency = data.updateFrequency
    this.shareCount = data.shareCount
    this.commentCount = data.commentCount
    this.trackCount = data.trackCount
    this.playCount = data.playCount
  }
}