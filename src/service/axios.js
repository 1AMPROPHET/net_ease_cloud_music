import originAxios from 'axios'

export function request(option) {
  return new Promise((resolve, reject) => {

    // 创建axios实例
    const instance = originAxios.create({
      baseURL: 'http://123.207.32.32:9001',
      timeout: 5000
    })

    // 请求和拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      console.log(err);
    })

    instance.interceptors.response.use(res => {
      return res
    }, err => {
      console.log(err);
      if (err && err.response) {
        switch (err.response.status) {
          case 400: 
            err.message = '请求错误'
            break
          case 401: 
            err.message = '未授权访问'
            break
          default:
            err.meesage = '其他错误'
        }
      }
      return err
    })

    // 传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}