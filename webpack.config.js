const env_dev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: "./src/index.tsx",
  mode: env_dev ? 'development' : 'production',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: env_dev ? 'cheap-eval-source-map' : 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'babel-loader'.
      { test: /\.tsx?$/, loader: "babel-loader" },
    ]
  }
}
