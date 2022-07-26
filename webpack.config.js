const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // './dist'의 절대 경로를 리턴합니다.
    filename: "app.bundle.js",
  },
  resolve: {
    //resolve : 웹팩이 모듈을 처리하는 방식 정의하는 것으로 확장자를 생략하고도 인식하게 만든다.
    extensions: [".js", ".jsx"],
  },
  devtool: "eval-cheap-source-map",
  //devtool : source-map을 설정하는 부분으로 에러가 발생했을 때 번들링된 파일에서 어느 부분에 에러가 났는지를 쉽게 확인할 수 있게 해주는 도구이다. 문서 에서 각 source-map의 종류와 기능을 확인할 수 있다.
  devServer: { historyApiFallback: true }, //이부분 있어야 react-router-dom 된다.
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.jfif$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  externals: {
    react: "React",
  },
};
