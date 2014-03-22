module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n/  Author: Jeremy Carlsten \n/  Version: 0.1.1 \n*/\n'
            },
            dist: {
                files: [
                    {src: 'src/js/*.js', dest: 'fractionify-0.1.0.min.js'}
                ]
            }
        },
        qunit:{
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', '/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('no-test', ['jshint', 'uglify']);
    grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);
};