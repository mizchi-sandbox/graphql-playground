module.exports = [
  {
    request: {
      path: '/user/:id',
      method: 'GET',
      query: {},
      values: {
        id: '1'
      }
    },
    response: {
      headers: {
        'x-csrf-token': 'csrf-token'
      },
      body: {
        id: '{:id}',
        name: 'mizchi'
      },
      values: {
        id: '1',
        name: 'mizchi'
      }
    }
  }
]
