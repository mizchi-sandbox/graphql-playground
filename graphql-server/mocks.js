module.exports = {
  ID: () => "<id>",
  String: () => "<string>",
  User: () => ({
    id: () => Date.now().toString(),
    name: () => "user_by_type"
  }),
  Query: () => ({
    user: () => ({
      id: () => Date.now().toString(),
      name: () => "user_by_query"
    })
  })
};
