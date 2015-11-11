module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/styles/style.css' : 'dev/sass/style.scss',
                    'dist/styles/blog-nav.css' : 'dev/sass/blog-nav.scss',
                    'dist/styles/baveuse-font.css' : 'dev/sass/baveuse-font.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    "dist/index.html" : "dev/jade/index.jade",
                    "dist/blog-nav.html" : "dev/jade/blog-nav.jade"
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            src: {
                files: "dev/jade/*.jade",
                tasks: ['jade']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('compile',['sass', 'jade']);
};
