import {request} from './axios'

export function Login(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}

export function UserDetail(uid) {
  return request({
    url: '/user/detail',
    params: {
      uid
    }
  })
}

export function UserAccount() {
  return request({
    url: '/user/account'
  })
}

export function Logout() {
  return request({
    url: '/logout'
  })
}

export class UserInfo {
  constructor(data) {
    this.listenSongs = data.listenSongs
    this.id = data.profile.userId
    this.createDays = data.createDays
    this.createTime = data.createTime
    this.level = data.level
    this.avatarUrl = data.profile.avatarUrl
    this.backgroundUrl = data.profile.backgroundUrl
    this.birthday = data.profile.birthday
    this.city = data.profile.city
    this.followeds = data.profile.followeds
    this.follows = data.profile.follows
    this.gender = data.profile.gender
    this.nickname = data.profile.nickname
  }
}