module.exports = function(config){
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'lib/jquery/dist/jquery.js',
			'lib/angular/angular.js'
		],
		exclude: [],
		preprocessors: {
			'template/*.html': ['ng-html2js'],
			'js/**/*.js': ['coverage']
		},
		ngHtml2JsPreprocessor: {
			moduleName: 'templates'
		},
		reporter: ['progress', 'coverage'],
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	});
};