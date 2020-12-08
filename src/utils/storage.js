const SALT = ''

const storage = {
  local: {
    get(key) {
      const strValue = localStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set(key, jsonValue) {
      const strValue = JSON.stringify(jsonValue)
      localStorage.setItem(SALT + key, strValue)
    },
    remove(key) {
      localStorage.removeItem(SALT + key)
    },
    removeAll() {
      localStorage.clear()
    }
  },
  session: {
    get(key) {
      const strValue = sessionStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set(key, jsonValue) {
      const strValue = JSON.stringify(jsonValue)
      sessionStorage.setItem(SALT + key, strValue)
    },
    remove(key) {
      sessionStorage.removeItem(SALT + key)
    },
    removeAll() {
      sessionStorage.clear()
    }
  }
}

export default storage
