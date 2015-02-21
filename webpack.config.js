var webpack = require('webpack');

module.exports = {
	entry: './index.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
    	new webpack.ProvidePlugin({
    		'window.jQuery': 'jquery'
    	})
    ]
}