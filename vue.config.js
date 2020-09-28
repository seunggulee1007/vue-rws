const path = require('path');
module.exports = {
	devServer: {
		overlay: false,
	},
	outputDir: path.resolve(__dirname, '../../spring-workspace/RWS/src/main/resources/static'),
	configureWebpack: {
		entry: ['babel-polyfill', '@/main.js'],
	},
};
