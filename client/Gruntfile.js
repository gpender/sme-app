  module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    'meta': {
      'jsFilesForTesting': [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-sanitize/angular-sanitize.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/underscore/underscore.js',
        'node_modules/restangular/dist/restangular.js',
        'test/**/*-spec.js',
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'source/**/*.js'
          ],
        }
      }
    }
  });

  grunt.registerTask('test', ['karma:development']);

};
