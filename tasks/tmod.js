/*
 * grunt-tmod
 * https://github.com/jsonzhang/grunt-tmodjs
 *
 * Copyright (c) 2013 Json
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var fs = require('fs');
var TmodJS = require("tmodjs");

module.exports = function(grunt) {

	grunt.registerMultiTask('tmod', 'the grunt plugin for tmodjs', function() {

		var that = this;
		var done = function () {};
		var options = this.options();
		var dest = this.files[0].dest;
        var base = path.resolve(options.base || './');

        options.debug = grunt.option('debug');
        options.cache = grunt.option('cache');

        if (path.extname(dest) === '.js') {
            options.runtime = path.basename(dest);
            options.output = path.dirname(dest);
        } else {
        	options.output = dest;
        }

		if (!fs.existsSync(base)) {
		    grunt.fail.warn('`options.base` is not a directory');
		}
        

        var tmod = new TmodJS(base, options);
        

        tmod.on('compile', function (error, data) {
        	if (error) {
        		done = that.async();
				var err = new Error('Compile error.');
				err.origError = error;
				grunt.fail.warn(err);
        	}
        });


        tmod.on('combo', function (error, data) {
        	if (!error) {
        		var comboFile = path.relative('./', data.outputFile);
        		grunt.log.writeln('File "' + comboFile + '" created.');
        	}
        });


        tmod.on('debug', function (error) {
        	done();
        });


		this.files.forEach(function (f) {

			var fileList = f.src.filter(function (filepath) {

	            if (!grunt.file.exists(filepath)) {
	                grunt.log.warn('Source file "' + filepath + '" not found.');
	                return false;
	            } else {
	                return true;
	            }

	        }).map(function (filepath) {
	        	return path.relative(base, filepath);
	        });
	        

	        tmod.compile(fileList);
		});

		
	});
};
