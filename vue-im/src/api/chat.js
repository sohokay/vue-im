import request from '@/utils/request'

export const chatUrl="http://132.232.154.146:7777/chatsHub"
export function login(data) {
  return request({
    url: '/api/User/Login',
    method: 'post',
    data
  })
}

