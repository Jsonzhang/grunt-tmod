/*
 * grunt-tmod
 * https://github.com/jsonzhang/grunt-tmodjs
 *
 * Copyright (c) 2013 Json
 * Licensed under the MIT license.
 */

'use strict';

var TmodJS = require("tmodjs");

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  	var path = require('path');
	grunt.registerMultiTask('tmod', 'the grunt plugin for tmodjs', function() {
	    // Merge task-specific and/or target-specific options with these defaults.
	    

		var options = {
		    output: this.data.dest || './build',
		    charset: 'utf-8',
		    debug: false // 此字段不会保存在配置中
		};
		var file = this.data.file;


		TmodJS.init(path.resolve(this.data.src), options);
    	TmodJS.compile(file, false);
    	TmodJS.watch();
    	TmodJS.saveUserConfig();
	});
};
