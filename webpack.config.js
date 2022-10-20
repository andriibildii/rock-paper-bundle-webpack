const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	devServer: {
		static: {
			directory: path.join(__dirname, "/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.png$/i,
				type: "asset/resource",
			},
			{
				test: /\.ttf$/i,
				type: "asset/resource",
			},
		],
	},
};
