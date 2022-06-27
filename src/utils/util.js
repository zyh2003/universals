/**
 * 检测数据类型
 * @param {*} arg
 * @returns
 */
function getDataType(arg) {
  const dataType = Object.prototype.toString.call(arg)
  const mapType = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return mapType[dataType]
}
/**
 *
 * @param {*} data
 * @returns
 */
const deepCopy = (data) => {
  const type = getDataType(data)
  let params
  if (type === 'array') {
    params = []
    for (let i = 0; i < data.length; i++) {
      params.push(deepCopy(data[i]))
    }
  } else if (type === 'object') {
    params = {}
    for (const i in data) {
      params[i] = deepCopy(data[i])
    }
  } else {
    return data
  }
  return params
}
export default {
  deepCopy
}
