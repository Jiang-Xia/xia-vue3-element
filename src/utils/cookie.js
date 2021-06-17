/*
 * @Author: 江夏
 * @LastEditors: 江夏
 */
import Cookies from 'js-cookie'
const TokenKey = 'xia_token'
const InfoKey = 'xia_info'
let day = '' // 一天时间
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(type, token, time) {
  day = time / (1000 * 60 * 60 * 24) // 一天时间
  return Cookies.set(TokenKey, type + ' ' + token, { expires: day })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getInfo() {
  const userInfo = Cookies.get(InfoKey) || '{}'
  if (userInfo) {
    return JSON.parse(unescape(userInfo))
  }
}

export function setInfo(userData) {
  // console.log(userData);
  return Cookies.set(InfoKey, userData, { expires: day })
}

export function removeInfo() {
  return Cookies.remove(InfoKey)
}
export function setNormalToken(type, token, time, tokenKey = 'access_token') {
  day = time / (1000 * 60 * 60 * 24) // 一天时间
  return Cookies.set(tokenKey, type + ' ' + token, { expires: day })
}
export function setNormalInfo(userData, time, infoKey = 'token_info') {
  day = time / (1000 * 60 * 60 * 24)
  return Cookies.set(infoKey, userData, { expires: day })
}

// cookie 过期时间 expires_at
export function setExpires(expires_at, time) {
  day = time / (1000 * 60 * 60 * 24)
  return Cookies.set('expires_at', expires_at, { expires: day })
}

export function getExpires() {
  return Cookies.get('expires_at')
}
