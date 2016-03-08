/*global module:false*/
module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    watch: {
      css: {
        files: '_sass/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
            'assets/css/style.css' : '_sass/style.scss'
        }
      }
    },
    browserSync: {
      bsFiles: {
        src : ['assets/css/style.css', 'index.html', 'assets/js/*.js']
      },
      options: {
        watchTask: true,
        ghostMode: false,
        server: {
          baseDir: "./"
        }
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};