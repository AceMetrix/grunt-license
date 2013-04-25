/*
 * grunt-license
 * https://github.com/badunk/grunt-license
 *
 * Copyright (c) 2013 Duncan Wong <baduncaduncan@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var checker = require('license-checker');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('license', 'Generates list of licenses for your project', function() {
        var done = this.async();
        checker.init({start: '.', unknown: true}, function(data){
            console.log(data);
            done();
        });
    });

};
