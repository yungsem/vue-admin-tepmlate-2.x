/**
 * 对 jsonp 插件进行再封装
 * https://github.com/webmodules/jsonp
 */
import JSONP from 'jsonp'

/**
 * 再封装的 jsonp
 * url: (String) 请求 url
 * queryParam: (Object) 请求参数
 * callBackParamName: (String) 指定回调函数名称的请求参数名称
 */
export default function jsonp (url, param, callBackParamName, callBackParamValue) {
  // 准备 url
  if (url.indexOf('?') < 0) { // 如果 url 中不含 ? ，则以 ? 开始，拼接请求参数
      url = url + '?' + formatParam(param)
  } else { // 如果 url 中含有 ? ，则不需要以 ? 开始，直接使用 & 继续拼接请求参数
      url = url + '&' + formatParam(param)
  }

  // 准备 opts
  const opts = {
    param: callBackParamName
  }
  if (callBackParamValue) {
    opts.name = callBackParamValue
  }

  // 调用底层 jsonp  
  return new Promise((resolve, reject) => {
    // jsonp      
    JSONP(url, opts, (err, data) => {
      if (!err) { // 请求成功时，err 是 null
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * 格式化请求参数：对象的形式 --> GET 请求参数的形式
 * param: (Object) 对象包装的请求参数
 */
function formatParam (param) {
  let paramStr = ''
  for (let k in param) {
    let value = param[k] !== undefined ? param[k] : ''
    paramStr += '&' + k + '=' + encodeURIComponent(value)
  }
  return paramStr ? paramStr.substring(1) : ''
}