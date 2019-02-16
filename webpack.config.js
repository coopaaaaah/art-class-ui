module.exports = options => {
    return {
      mode: 'development',
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
      },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ]
    }
  }
}