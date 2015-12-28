module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/styles/nixallover.css': 'src/sass/nixallover.scss'
        }
      }
    },
    jade: {
      compile: {
        files: {
          'dist/index.html'       : 'src/jade/index.jade'
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },
    uglify: {
      my_target: {
        files: {
          'dist/scripts/nixallover.js' : ['src/js/nixallover.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/jade/*.jade', 'src/sass/*.scss', 'src/js/*.js'],
        tasks: ['sass', 'jade', 'jshint', 'uglify']
      }
    }
  });

  // grunt.event.on('watch', function(action, filepath, target) {
  //   grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  // });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['sass', 'jade', 'jshint', 'uglify']);
  // grunt.registerTask('default',['sass','jade']);


};