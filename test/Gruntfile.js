/*
 * grunt-tmod
 * https://github.com/jsonzhang/grunt-tmodjs
 *
 * Copyright (c) 2013 Json
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

    grunt.initConfig({
        tmod: {
            template: {
                src: './tpl/**/*.html',
                dest: './dist/template.js',
                options: {
                    base: './tpl/', // template('tpl/index/main') >>> template('index/main')
                    combo: true
                } 
            }
        },
        watch: {
            template: {
                files: '<%=tmod.template.src%>',
                tasks: ['tmod'],
                options: {
                    spawn: false
                }
            }
        }
    });


    //grunt.loadNpmTasks('grunt-tmod');
    require('../tasks/tmod.js')(grunt);
    //grunt.loadNpmTasks('grunt-contrib-watch');
    require('../node_modules/grunt-contrib-watch/tasks/watch.js')(grunt);

    grunt.registerTask('default', ['tmod', 'watch']);

};