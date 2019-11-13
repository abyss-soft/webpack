/*
Установка:
npm install


Для разработки:
 1. ставим в файле .env переменную APP_ENV=dev
 2. даем команду npm run start
 http://localhost:3000/
 Получаем комфортную среду для отладки (есть карты кода (source maps))


 Для продакшена:
 1. ставим в файле .env переменную APP_ENV=prod
 2. даем команду npm run build

Так же в файле .env  есть глобальные переменные, которые можно использовать для запуска определенного кода в development,
если нужны еще переменные, то дописываем их в секцию plugins:webpack.DefinePlugin
Если нужны еще точки входа (кроме index.html и abiut.html), то вписываем их в plugin:
    new HtmlWebPackPlugin(....)

 Для проведения теста:
    npm run test


Для проверки правильности кода:
    npm run lint

*/
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpack = require('webpack');
require('dotenv').config()

const ENV = process.env.APP_ENV;
const isDev = ENV === 'dev';
const isProd = ENV === 'prod';

function setDevTool() {
  if (isDev) {
    return 'cheap-module-eval-source-map';
  } else {
    return 'none';
  }
}

function setDMode() {
  if (isProd) {
    return 'production';
  } else {
    return 'development';
  }
}

const config = {
  target: "web", //"node" or "web"
  entry: './src/palette/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: setDMode(),
  devtool: setDevTool(),
  module: {
    rules: [{
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }},
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                processive: true,
                quality: 98
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts'
          }
        }]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
      new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY),
      APP_ENV: JSON.stringify(process.env.APP_ENV)
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    stats: 'errors-only',
    clientLogLevel: 'none'
  }
}

if (isProd) {
  config.plugins.push(
    new UglifyJSPlugin(),
  );
};

module.exports = config;
