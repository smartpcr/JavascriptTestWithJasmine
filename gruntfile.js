module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		watch: {
			karma: {
				files: ['js/**/*.js', 'spec/**/*.js'],
				tasks: ['karma:unit:run']
			}
		}
	});
};