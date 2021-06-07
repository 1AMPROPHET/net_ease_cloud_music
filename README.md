# net_ease_music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

首先感谢@Binaryify的NeteaseCloudMusicApi以及开源精神

1.按照网易云音乐网页版尽可能还原。
2.暂时只完成了 发现音乐 的 推荐和排行榜，以及播放器，登录功能，希望后续有时间完善。
3.使用Vue3 、Vue、 Router、 Vuex、 mitt。

发现音乐 的 推荐页
主要完成了首页Banner、轮播、榜单的跳转

![image](https://user-images.githubusercontent.com/47853509/120977089-88961300-c7a5-11eb-8d9a-f941c37c2361.png)

通过左右方向指示器手动轮播，可设置自动轮播时间

热门推荐部分，目前还不能切换类型，后续添加
![image](https://user-images.githubusercontent.com/47853509/120977256-b5e2c100-c7a5-11eb-9da5-dc010e921a67.png)

新碟上架，可手动轮播
![image](https://user-images.githubusercontent.com/47853509/120977703-373a5380-c7a6-11eb-9474-4cb130af7f4d.png)

排行榜部分，可直接播放音乐或添加到播放栏
![image](https://user-images.githubusercontent.com/47853509/120977803-53d68b80-c7a6-11eb-9851-8fe8e9567c64.png)

播放器，可通过右侧锁定键锁定，鼠标停留显示，支持播放、暂停、添加、音量调整、进度调整、歌词显示和跟随
![image](https://user-images.githubusercontent.com/47853509/120977995-94360980-c7a6-11eb-82dd-a305a262b653.png)

![image](https://user-images.githubusercontent.com/47853509/120978158-c34c7b00-c7a6-11eb-9ccb-7087f5259437.png)

排行榜页
支持所有榜单的手动切换，同样可以直接播放或添加到播放列表
![image](https://user-images.githubusercontent.com/47853509/120978463-1292ab80-c7a7-11eb-8139-6ce1169ad814.png)

评论区，目前还不能查看更多或回复，后续可能添加
![image](https://user-images.githubusercontent.com/47853509/120978551-2b9b5c80-c7a7-11eb-89c9-be133ced2c3c.png)

返回顶部功能，点击后返回页面顶部
![image](https://user-images.githubusercontent.com/47853509/120978717-5ab1ce00-c7a7-11eb-8e77-d23db2f87d6f.png)
