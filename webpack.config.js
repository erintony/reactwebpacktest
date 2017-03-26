var path = require('path')
//html 模板解析插件
var htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: path.resolve(__dirname,'./src/index.js'),
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'react 学习',
			template: path.resolve(__dirname,'./src/index.html')
		})
	]
}