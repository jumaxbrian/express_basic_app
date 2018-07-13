module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            local: {
                options: {
                    reporter: 'spec',
                    //captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    // below optionally clear the require cache before running tests (defaults to false)
                    clearRequireCache: false,
                    ui: 'tdd'
                },
                src: ['test/**/*.js']
            },
        },
        mocha_istanbul: {
            coverage: {
                src: 'test', // a folder works nicely
                options: {
                    mochaOptions: ['--ui', 'tdd'] // any extra options for mocha
                }
            }
        }
    });

    //load the plugins
    grunt.loadNpmTasks('grunt-mocha-test'); //for testing
    grunt.loadNpmTasks('grunt-mocha-istanbul'); //for coverage

    //run the tasks
    grunt.registerTask('default', '', function () {
        grunt.log.write('This is pointeless');
    })

    //Test
    grunt.registerTask('test', ['mochaTest:local']);

    //Coverage
    grunt.registerTask('coverage', ['mocha_istanbul']);

}