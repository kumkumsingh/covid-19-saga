const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: "babel-loader"},
            {test: /\.(css)$/, use: ["style-loader", "css-loader"]},
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}
