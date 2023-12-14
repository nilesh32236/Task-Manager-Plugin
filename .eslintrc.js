// .eslintrc.js
module.exports = {
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	env: {
		browser: true,
		es6: true,
	},
	extends: 'eslint:recommended',
	rules: {
		// Formatting Rules
		'indent': [ 'error', 'tab' ],     // Use 2 spaces for indentation
		'quotes': [ 'error', 'single' ],  // Use single quotes
		'semi': [ 'error', 'always' ],    // Use semicolons at the end of statements
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],  // Add space after commas

		// Yoda Condition
		'yoda': [ 'error', 'always' ],  // Enforce Yoda condition
	},
	ignorePatterns: [
		'node_modules/',
		'dist/',
		'build/',
		'webpack.config.js',
		'.eslintrc.js'
	],
};
