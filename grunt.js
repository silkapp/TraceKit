/*global module:false*/
module.exports = function (grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    coffee: {
      app: {
        src: ["tracekit.coffee"],
        dest: "dist"
      }
    },
    coffeelint: {
      app: "tracekit.coffee"
    },
    coffeelintOptions: {
      "max_line_length": 120
    },
    jshint: {
      options: {
        boss: true, //dont" allow assignments to be evaluated as truthy/falsey */
        bitwise: true,
        browser: true,
        curly: true,
        devel: true,
        eqeqeq: true,
        eqnull: true,
        es5: true,
        immed: true,
        indent: 2,
        latedef: true,
        maxdepth: 9,
        maxerr: 20,
        maxparams: 6,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        onecase: true,
        quotmark: "double",
        regexp: false,
        shadow: true,
        strict: true,
        sub: true,
        trailing: true,
        undef: true,
        unused: true,
        white: false
      },
      globals: {
        ActiveXObject: false
      }
    },
    lint: {
      files: ["grunt.js", "dist/tracekit.js"]
    },
    min: {
      dist: {
        src: ["dist/tracekit.js"],
        dest: "dist/tracekit.min.js"
      }
    },
    watch: {
      files: ["<config:lint.files>", "tracekit.coffee"],
      tasks: "coffee lint"
    },
  });

  grunt.loadNpmTasks("grunt-coffee");
  grunt.loadNpmTasks("grunt-coffeelint");

  // Default task.
  grunt.registerTask("default", "coffee coffeelint lint min watch");

  // Travis-CI task.
  grunt.registerTask("travis", "coffee coffeelint lint min");
};