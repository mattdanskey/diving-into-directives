var webpack = require('webpack');

var devFlag = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

var config = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: './build',
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	plugins: [devFlag],
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: [
				"style-loader",
				"css-loader",
				"autoprefixer-loader?browsers=last 2 version",
				"sass-loader"
			]
		}, {
			test: /\.css$/,
			loaders: [
				"style-loader",
				"css-loader",
				"autoprefixer-loader?browsers=last 2 version"
			]
		}]
	}
};

module.exports = config;