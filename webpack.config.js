const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      //对图片进行处理
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 模块小于 maxSize，会被作为Base64编码的字符串注入到包中，
            // 否则模块文件会被生成到输出的目标目录中
            maxSize: 2 * 1024,
          },
        },
        generator: {
          filename: "assets/img/[name].[hash:6][ext]",
        },
      },
      //处理css文件
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      //处理less实现css modules
      {
        test: /\.less$/i,
        include: path.resolve('./src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:5]'
              }
            }
          },
          'less-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    //定义项目全局变量
    new webpack.DefinePlugin({
      _BackUrl: JSON.stringify('http://127.0.0.1:3000')
    })
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Images: path.resolve(__dirname, './src/assets/images'),
      Patterns: path.resolve(__dirname, './src/apis/patterns'),
      Apis: path.resolve(__dirname, './src/apis'),
    },
  },
  devServer: {
    static: {
      publicPath: "/",
      directory: path.join(__dirname, "./"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};
