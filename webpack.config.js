module.exports = {
  entry: ["./jsFile/main.js"],
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    loaders: [{ test: /\.css$/, use: "style-loader!css-loader" }],
  },
};
