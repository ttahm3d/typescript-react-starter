const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|gif|ico)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(svg|ttf|eot|ttf|woff(2)?)$/i,
				type: "asset/inline",
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "[name].[contenthash].bundle.js",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 1,
				},
			},
		},
	},
};
