/*
 * grunt-license
 * https://github.com/badunk/grunt-license
 *
 * Copyright (c) 2013 Duncan Wong <baduncaduncan@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= simplemocha.all.src %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
        tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    license: {
        all: ''
    },

    // Unit tests.
    simplemocha: {
        options: {
            globals: ['should'],
            timeout: 3000,
            ignoreLeaks: true,
            ui: 'bdd',
            reporter: 'dot'
        },
        all: {src: ['test/*.spec.js']}
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'license', 'simplemocha']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
