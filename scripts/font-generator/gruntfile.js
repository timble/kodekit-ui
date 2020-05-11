module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-webfont');

    // grunt config
    grunt.initConfig({

        // Grunt variables
        srcPath: 'src',
        distPath: 'dist',


        // Iconfont
        webfont: {
            icons: {
                src: [
                    'node_modules/open-iconic/svg/*.svg',
                    '<%= srcPath %>/icons/*.svg'
                ],
                dest: '<%= distPath %>/fonts/k-icons',
                destCss: '<%= srcPath %>/scss/admin/generated',
                options: {
                    codepointsFile: '<%= srcPath %>/fonts/k-icons-codepoints',
                    font: 'k-icons',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    template: '<%= srcPath %>/icons/template.css',
                    types: 'eot,woff,ttf,svg',
                    htmlDemo: false
                }
            }
        }
    });

    grunt.registerTask('default', ['webfont']);

};