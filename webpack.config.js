const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: './src/blind.js',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'blind.min.js',
		libraryTarget: 'window',
		library: 'BlindJS'
	}
};
