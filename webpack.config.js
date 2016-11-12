const path = require("path");

const sourceFolder = path.join(__dirname, "src");

module.exports = {
  entry: path.join(sourceFolder, "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: sourceFolder,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
}
