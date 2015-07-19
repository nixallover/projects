module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/styles/main.css': 'src/sass/main.scss'
        }
      }
    },
    jade: {
      compile: {
        files: {
          'dist/index.html': 'src/jade/index.jade'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/jade/*.jade', 'src/sass/*.scss'],
        tasks: ['sass','jade']
      }
    }
  });

  // grunt.event.on('watch', function(action, filepath, target) {
  //   grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  // });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default',['watch']);
  // grunt.registerTask('default',['sass','jade']);


};