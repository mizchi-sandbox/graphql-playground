if (process.env.NODE_ENV === "test") {
  module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"]
  };
} else {
  module.exports = {
    presets: ["next/babel", "@babel/preset-react"]
  };
}
