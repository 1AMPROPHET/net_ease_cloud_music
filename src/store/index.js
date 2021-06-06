import { createStore } from 'vuex'

export default createStore({
  state: {
    subBarIndex: 0,
    categoryIndex: 0,
    newAlbums: [],
    speedUpBoard: {},
    artist: [],
    hotDj: [],
    billCategories: [],
    showLogin: false,
    userPhone: 0,
    userPassword: '',
    loginStatus: false,
    userInfo: {},
    playList: [],
    currentListComments: {}
  },
  mutations: {
    changeSubBarIndex(state, index) {
      state.subBarIndex = index
    },
    changeCategoryIndex(state, index) {
      state.categoryIndex = index
    },
    login(state, flag) {
      state.showLogin = flag
    },
    getPhone(state, num) {
      state.userPhone = num
    },
    getPassword(state, pw) {
      state.userPassword = pw
    },
    changeStatus(state, flag) {
      state.loginStatus = flag
    },
    getUserInfo(state, obj) {
      state.userInfo = obj
    },
    addToPlayList(state, song) {
      state.playList.push(song)
    },
    addAndPlay(state, song) {
      state.playList.unshift(song)
    },
    playSong(state, index) {
      return state.playList[index]
    },
    getComment(state, comment) {
      state.currentListComments = comment
    }
  },
  getters: {
    playSong: (state) => (index) => {
      return state.playList[index]
    }
  },
  actions: {
  },
  modules: {
  }
})
