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
        jquery: [
            'node_modules/jquery/dist/jquery.js',
            '<%= srcPath %>/js/koowa.noconflict.js'
        ],
        admin: [
            '<%= srcPath %>/js/kquery.set.js',
            'node_modules/select2/dist/js/select2.full.js',
            'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
            'node_modules/footable/js/footable.js',
            'node_modules/jqtree/tree.jquery.js',
            '<%= srcPath %>/js/custom-file-input.js',
            '<%= srcPath %>/js/bootstrap-dropdown.js',
            '<%= srcPath %>/js/bootstrap-tab.js',
            '<%= srcPath %>/js/bootstrap-tooltip.js',
            '<%= srcPath %>/js/jquery.ui.widget.js',
            '<%= srcPath %>/js/koowa.scopebar.js',
            '<%= srcPath %>/js/koowa.class.js',
            '<%= srcPath %>/js/koowa.grid.js',
            '<%= srcPath %>/js/koowa.tree.js',
            '<%= srcPath %>/js/datepicker.js',
            '<%= srcPath %>/js/koowa.datepicker.js',
            '<%= srcPath %>/js/overflowing.js',
            '<%= srcPath %>/js/tabbable.js',
            '<%= srcPath %>/js/off-canvas-menu.js',
            '<%= srcPath %>/js/konami.js',
            '<%= srcPath %>/js/main.js',
            '<%= srcPath %>/js/kquery.unset.js'
        ],

        // Iconfont
        webfont: {
            icons: {
                src: [
                    'node_modules/openiconic/svg/*.svg',
                    '<%= srcPath %>/icons/*.svg'
                ],
                dest: '<%= distPath %>/fonts/k-icons',
                destCss: '<%= srcPath %>/scss/utilities',
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
        },


        // Modernizr
        modernizr: {
            dist: {
                "cache": true,
                "dest": "<%= distPath %>/js/build/modernizr.js",
                "options": [
                    "html5shiv",
                    "prefixedCSS",
                    "setClasses"
                ],
                "uglify": false,
                "tests": [
                    "eventlistener",
                    "appearance",
                    "boxshadow",
                    "checked",
                    "cssanimations",
                    "flexbox",
                    "flexboxlegacy",
                    "flexboxtweener",
                    "flexwrap",
                    "touchevents"
                ],
                "crawl" : false,
                "customTests" : [],
                "classPrefix": "k-"
            }
        },


        // Concatenate files
        concat: {
            js: {
                files: {
                    '<%= distPath %>/js/build/jquery.js': '<%= jquery %>',
                    '<%= distPath %>/js/build/admin.js': '<%= admin %>'
                }
            }
        },


        // Uglify
        uglify: {
            options: {
                sourceMap: true,
                preserveComments: /(?:^!|@(?:license|preserve|cc_on))/ // preserve @license tags
            },
            build: {
                files: {
                    '<%= distPath %>/js/min/modernizr.js': '<%= distPath %>/js/build/modernizr.js',
                    '<%= distPath %>/js/min/jquery.js': '<%= jquery %>',
                    '<%= distPath %>/js/min/admin.js': '<%= admin %>'
                }
            }
        },


        // Watch files
        watch: {
            webfont: {
                files: [
                    'node_modules/open-iconic/svg/*.svg',
                    '<%= srcPath %>/icons/*.svg'
                ],
                tasks: ['webfont'],
                options: {
                    interrupt: true,
                    atBegin: false
                }
            },
            javascript: {
                files: [
                    '<%= srcPath %>/js/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            concat: {
                files: [
                    '<%= srcPath %>/js/*.js'
                ],
                tasks: ['concat'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }


    });

    // The dev task will be used during development
    grunt.registerTask('default', ['modernizr', 'watch']);

    // JS only
    grunt.registerTask('js', ['watch:concat']);

};