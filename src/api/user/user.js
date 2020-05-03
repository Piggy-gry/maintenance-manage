import request from '@/utils/request'

export function login (data) {
  return request({
    method: 'post',
    url: '/user/login',
    data: data
  })
}

export function register (data) {
  return request({
    method: 'post',
    url: '/user/register',
    data: data
  })
}
