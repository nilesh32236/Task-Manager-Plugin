const path = require( 'path' );

const TerserPlugin         = require( 'terser-webpack-plugin' );
const CssMinimizerPlugin   = require( 'css-minimizer-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const glob                 = require( 'glob' );

module.exports = {
	entry: getEntries( path.resolve( __dirname, './assets/js/' ), '.js' ),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'dist/js' ),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
					},
				},
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: [ 'eslint-loader' ],
			},
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin(),
		],
	},
	mode: 'production',
	resolve: {
		modules: [path.resolve(__dirname, './assets/js/'), 'node_modules'],
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: '../css/[name].bundle.css',
		} ),
	],
};

function getEntries( directory, extension ) {
	const entry = {};
	const files = glob.sync( path.join( directory, `*${extension}` ) );

	files.forEach( ( file ) => {
		const name    = path.relative( directory, file ).replace( extension, '' );
		entry[ name ] = file;
	});

	return entry;
}