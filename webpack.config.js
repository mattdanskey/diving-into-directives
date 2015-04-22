var webpack = require('webpack');

var devFlag = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

var config = {
	entry: {
		app: ['webpack/hot/dev-server', './src/index.js']
	},
	output: {
		path: './build',
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	plugins: [devFlag]
};

module.exports = config;