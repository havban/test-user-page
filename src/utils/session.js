import Cookies from 'js-cookie'

const KEY = 'userData'

export function validateSession (obj) {
  const isLoggedin = Cookies.get(KEY)
  const name = isLoggedin ? 'Users' : 'Login'
  obj.$router.replace({ name })
  return !!isLoggedin
}

export function writeSession (cred) {
  const value = cred ? JSON.stringify(cred) : ''
  Cookies.set(KEY, value)
}
