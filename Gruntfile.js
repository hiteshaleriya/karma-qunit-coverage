
module.exports = function (grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'demo/karma.conf.js'
            }
        }
    });
    
    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    grunt.registerTask('test', ['karma']);
};