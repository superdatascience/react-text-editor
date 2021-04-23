const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		chunkFilename: "[id].js",
		publicPath: ""
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:5]",
							},
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									["autoprefixer", {},],
								],
							},
						}
					}
				]
			}
		]
	}
};
