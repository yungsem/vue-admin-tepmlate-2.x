
/**
 * ascending -> asc
 * descending -> desc
 * @param {*} fullorder ascending/descending
 */
function short (fullorder) {
  if (!fullorder) {
    return ''
  }
  const firstLetter = fullorder.substring(0, 1)
  if (firstLetter === 'a') {
    return fullorder.substring(0, 3)
  } else if (firstLetter === 'd') {
    return fullorder.substring(0, 4)
  } else {
    return 'desc'
  }
}

/**
 * 驼峰式命名转换为下划线式命名
 * sample:
 *  createTime --> create_time
 * @param {*} camel
 */
function camelToUnderline (camel) {
  if (!camel) {
    return ''
  }
  return camel.replace(/([A-Z])/g, '_$1').toLowerCase()
}

/**
 * 去除字符串两端的空格
 * @param {*} str
 */
function trim (str) {
  if (!str) {
    return ''
  }
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 导出 excel
 * @param {*} data 要导出的数据
 * @param {*} fileName 文件名
 */
function exportExcel (data, fileName) {
  const blob = new Blob([data])
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a')
    elink.download = fileName
    elink.style.display = 'none'
    elink.href = URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href) // 释放URL 对象
    document.body.removeChild(elink)
  } else { // IE10+下载
    navigator.msSaveBlob(blob, fileName)
  }
}

/**
 * 组装列表查询的参数
 *
 * @param pageIndex 页码
 * @param pageSize 每页显示的条数
 * @param sortName 排序字段名
 * @param sortOrder 顺序
 * @param conditions 查询字段
 * @returns {{pageIndex: *, pageSize: *, sortName: *, sortOrder: *, conditions}}
 */
function getSearchParam (pageIndex, pageSize, sortName, sortOrder, conditions) {
  // 去除 conditions 中的无效字段
  let newConditions = {}
  Object.keys(conditions).forEach(key => {
    if (conditions[key]) {
      newConditions[key] = conditions[key]
    }
  })
  // 拼接参数
  return {
    pageIndex: pageIndex,
    pageSize: pageSize,
    sortName: sortName,
    sortOrder: sortOrder,
    conditions: newConditions
  }
}

/**
 * 组装动态路由
 *
 * @param routers 根据角色获取到的路由数据
 * @returns {*[]}
 */
function generateRoutes (routers) {
  if (routers) {
    // 组装 childrenRoutes
    const childrenRoutes = []
    for (let i = 0; i < routers.length; i++) {
      if (routers[i].path) {
        let route = {}
        route.path = routers[i].path
        route.component = (resolve) => require(['@/components' + route.path + '/' + routers[i].componentName], resolve)
        childrenRoutes.push(route)
      }
    }
    // 动态添加路由
    return [{
      path: '/home',
      name: 'Home',
      component: (resolve) => require(['@/components/home/Home'], resolve),
      children: childrenRoutes
    }]
  }
}

export default { short, camelToUnderline, trim, exportExcel, getSearchParam, generateRoutes }
