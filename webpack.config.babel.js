const CONFIG = {
  APP: './src/index.js',
  DIST: `${__dirname}/dist`,
  FILENAME: 'ramdish.js',
  NAME: 'R'
};

export default {
  entry: CONFIG.APP,
  output: {
    path: CONFIG.DIST,
    filename: CONFIG.FILENAME,
    library: CONFIG.NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
