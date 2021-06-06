import {createApp} from 'vue'

import toast from './Toast.vue'

let instance

const initInstance = () => {
  // 这里就是与 vue2 最大的区别了
  // 在 vue2 的时候，我们只需 instance.$mount() 便能得到节点，现在不行
  const app = createApp(toast)
  // 需要一个容器
  const container = document.createElement('div')
  // 再进行挂载 - 挂载之后返回实例上下文
  instance = app.mount(container)
  
  document.body.appendChild(container)
}

const Toast = option => {
  if (!instance) initInstance()
  
  option = typeof option === 'string' ? { content: option } : option
  
  const defaultOption = {
    content: '',
    delay: 1500,
    type: 'info'
  }
  
  for (const key in defaultOption)
    instance[key] = option[key] || defaultOption[key]
  
  return instance.open()
}

const types = ['success', 'error', 'warn', 'info']
types.forEach(type => Toast[type] = content => Toast({ content, type }))

// 直接导出该方法
export default Toast