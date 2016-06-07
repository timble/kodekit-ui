module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require('jit-grunt')(grunt);

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
                dest: '<%= distPath %>/fonts/koowa-icons',
                destCss: '<%= srcPath %>/scss/utilities',
                options: {
                    font: 'koowa-icons',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts/icons/',
                    template: '<%= srcPath %>/icons/template.css',
                    htmlDemo: false
                }
            }
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,

                "dest": "<%= srcPath %>/js/modernizr.js",
                "options": [
                    "html5shiv",
                    "prefixedCSS",
                    "setClasses"
                ],
                "uglify": false,
                "tests": [
                    "appearance",
                    "checked",
                    "flexbox",
                    "flexboxlegacy",
                    "flexboxtweener",
                    "flexwrap"
                ],
                "crawl" : false,
                "customTests" : [],
                "classPrefix": "k-"
            }
        },


        // Uglify
        uglify: {
            options: {
                sourceMap: true,
                preserveComments: 'some' // preserve @license tags
            },
            build: {
                files: {
                    '<%= distPath %>/js/jquery.js': [
                        'node_modules/jquery/dist/jquery.js',
                        '<%= srcPath %>/js/koowa.noconflict.js'
                    ],
                    '<%= distPath %>/js/admin.js': [
                        '<%= srcPath %>/js/kquery.set.js',
                        'node_modules/select2/dist/js/select2.full.min.js',
                        'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                        'node_modules/footable/dist/footable.min.js',
                        'node_modules/floatthead/dist/jquery.floatThead.min.js',
                        '<%= srcPath %>/js/overflowing.js',
                        '<%= srcPath %>/js/tabbable.js',
                        '<%= srcPath %>/js/off-canvas-menu.js',
                        '<%= srcPath %>/js/main.js',
                        '<%= srcPath %>/js/kquery.unset.js'
                    ]
                }
            }
        },


        // Watch files
        watch: {
            javascript: {
                files: [
                    '<%= srcPath %>/js/*.js'
                ],
                tasks: ['uglify'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }


    });

    // The dev task will be used during development
    grunt.registerTask('default', ['webfont', 'modernizr', 'watch']);

};