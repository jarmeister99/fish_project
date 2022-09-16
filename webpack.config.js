const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'app/src/index.tsx'),

  devServer: {
    static: path.resolve(__dirname, 'app/dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs)$/,
        include: path.resolve(__dirname, 'app/src'),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              ["@babel/preset-typescript", {}],
              ["@emotion/babel-preset-css-prop", {
                "autoLabel": "dev-only",
                "labelFormat": "[local]"
              }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(ttf)$/i,
       mimetype: 'application/font/ttf',
       type: 'asset/resource',
     },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.mjs'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <body>
            <div id="app-root"></div>
          </body>
        </html>
      `
    })
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'app/dist'),
  },
};