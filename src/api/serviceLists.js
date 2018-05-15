import request from '@/utils/request'
import qs from 'qs'
// 获取左侧列表
export function getServiceInfo() {
  return request({
    url: '/service/type/headList',
    method: 'post'
  })
}
// 获取右侧服务列表
export function getThirdServiceList(params) {
  //  console.log(params)
  return request({
    url: 'service/searchServiceByCondition',
    method: 'post',
    data:qs.stringify(params)
  })
}
// 获取服务详情页数据
export function getServiceDetails(id) {
  return request({
    url: '/service/details/list?id='+id,
    method: 'get',
  })
}
// 服务详情页-执行

export function serviceDetailsExecute(params) {
 
  return request({
    url: '/execute/service',
    method: 'post',
    data:qs.stringify(params)
  })
}

// 获取分类名称 by分类id
export function getServiceTypeNameById(params) {
 
  return request({
    url: '/service/getServiceTypeNameById',
    method: 'post',
    data:qs.stringify(params)
  })
}