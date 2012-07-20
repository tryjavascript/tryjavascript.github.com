module.exports = function( grunt ) {
	'use strict';
	
	grunt.loadNpmTasks( 'grunt-jasmine-tasks')

	grunt.initConfig( {
		
		lint: {
			src: [ 'src/**/*.js' ]
			, specs: [ 'specs/**/*.js' ]
			, all: [ 'src/**/*.js', 'specs/**/*.js' ]
		}
	})
}
