module.exports = {
  Query: {
    async user() {
      const res = await fetch('http://localhost:3010/user/foo')
      const data = await res.json()
      return data
    }
  }
}
