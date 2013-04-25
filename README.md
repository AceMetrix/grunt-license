# grunt-license

> Generates a list of recursively dependent licenses used within a project

Currently a WIP!!

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-license --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-license');
```

## The "license" task

### Overview
In your project's Gruntfile, add a section named `license` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  license: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.unknown
Type: `Boolean`
Default value: `false`

Only generate a list of unknown licenses (as opposed to all)

#### options.start
Type: `String`
Default value: `.'`

Project directory from which to start the search

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  license: {
    options: {
      unknown: true,
      start: './node_modules/mocha'
    },
    all: {
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
