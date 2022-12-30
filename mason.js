const mason = require('@joomlatools/mason-tools-v1');
const path = require('path');
const fs = require('fs').promises;

const projectPath = process.cwd();
const srcPath = `${projectPath}/src`;
const distPath = `${projectPath}/dist`;
const nodeModules = `${projectPath}/node_modules`;

async function files() {

    await mason.fs.download('https://unpkg.com/alpinejs@3.0.6/dist/cdn.js', `${distPath}/js/alpine.js`);
    await mason.fs.download('https://unpkg.com/alpinejs@3.0.6/dist/cdn.min.js', `${distPath}/js/alpine.min.js`);

    await mason.fs.copyFolderContents(`${nodeModules}/select2/src/scss`, `${srcPath}/scss/admin/3rdparty/copied/select2`);
    await mason.fs.copyFolderContents(`${nodeModules}/select2-bootstrap-theme/src`, `${srcPath}/scss/admin/3rdparty/copied/select2-bootstrap-theme`);
    await mason.fs.copyFolderContents(`${nodeModules}/bootstrap/scss`, `${srcPath}/scss/admin/3rdparty/copied/bootstrap`);
}

async function js() {
    try {
        await modernizr();
    } catch (e) {
        console.error(e);
    }

    let tmpFootable = `${distPath}/js/footable-processed.js`;
    let footable = (await fs.readFile(`${nodeModules}/footable/js/footable.js`)).toString();
    footable = '(function($) { var jQuery = $;'+footable+'})(jQuery);';

    await fs.writeFile(tmpFootable, footable);

    const jsMap = {
        [`${distPath}/js/bootstrap.js`]: [
            `${srcPath}/js/bootstrap.js`
        ],
        [`${distPath}/js/jquery.js`]: [
            `${nodeModules}/jquery/dist/jquery.js`,
            `${srcPath}/js/koowa.noconflict.js`
        ],
        [`${distPath}/js/koowa.kquery.js`]: [
            `${srcPath}/js/koowa.kquery.js`
        ],
        [`${distPath}/js/jquery.magnific-popup.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${nodeModules}/magnific-popup/dist/jquery.magnific-popup.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/jquery.validate.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${nodeModules}/jquery-validation/dist/jquery.validate.js`,
            `${srcPath}/js/jquery.validate.patch.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/koowa.datepicker.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${srcPath}/js/datepicker.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/koowa.select2.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${nodeModules}/select2/dist/js/select2.full.js`,
            `${srcPath}/js/koowa.select2.autocomplete.js`,
            `${srcPath}/js/koowa.select2.scroll.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/koowa.tree.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${nodeModules}/jqtree/tree.jquery.js`,
            `${srcPath}/js/koowa.tree.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/koowa.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${srcPath}/js/jquery.ui.widget.js`,
            `${srcPath}/js/koowa.scopebar.js`,
            `${srcPath}/js/koowa.class.js`,
            `${srcPath}/js/koowa.grid.js`,
            `${srcPath}/js/koowa.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/tooltip.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${srcPath}/js/bootstrap-tooltip.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/admin.js`]: [
            `${srcPath}/js/kquery.set.js`,
            `${nodeModules}/select2/dist/js/select2.full.js`,
            `${srcPath}/js/koowa.select2.autocomplete.js`,
            `${nodeModules}/magnific-popup/dist/jquery.magnific-popup.js`,
            `${nodeModules}/jquery-validation/dist/jquery.validate.js`,
            `${srcPath}/js/jquery.validate.patch.js`,
            tmpFootable,
            `${nodeModules}/jqtree/tree.jquery.js`,
            `${srcPath}/js/bootstrap-dropdown.js`,
            `${srcPath}/js/bootstrap-tab.js`,
            `${srcPath}/js/bootstrap-tooltip.js`,
            `${srcPath}/js/jquery.ui.widget.js`,
            `${srcPath}/js/koowa.scopebar.js`,
            `${srcPath}/js/koowa.class.js`,
            `${srcPath}/js/koowa.grid.js`,
            `${srcPath}/js/koowa.tree.js`,
            `${srcPath}/js/datepicker.js`,
            `${srcPath}/js/ui.initialize.js`,
            `${srcPath}/js/ui.konami.js`,
            `${srcPath}/js/ui.custom-file-input.js`,
            `${srcPath}/js/ui.tabbable.js`,
            `${srcPath}/js/ui.off-canvas-menu.js`,
            `${srcPath}/js/ui.ajaxloading.js`,
            `${srcPath}/js/ui.dragger.js`,
            `${srcPath}/js/ui.gallery.js`,
            `${srcPath}/js/ui.sidebartoggle.js`,
            `${srcPath}/js/ui.scopebartoggles.js`,
            `${srcPath}/js/ui.subcontenttoggle.js`,
            `${srcPath}/js/ui.topnavigation.js`,
            `${srcPath}/js/ui.tabs-scroller.js`,
            `${srcPath}/js/ui.main.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/admin.kodekit.js`]: [
            `${srcPath}/js/kquery.set.js`,
            tmpFootable,
            `${srcPath}/js/bootstrap-dropdown.js`,
            `${srcPath}/js/bootstrap-tab.js`,
            `${srcPath}/js/bootstrap-tooltip.js`,
            `${srcPath}/js/ui.initialize.js`,
            `${srcPath}/js/ui.konami.js`,
            `${srcPath}/js/ui.custom-file-input.js`,
            `${srcPath}/js/ui.tabbable.js`,
            `${srcPath}/js/ui.off-canvas-menu.js`,
            `${srcPath}/js/ui.ajaxloading.js`,
            `${srcPath}/js/ui.dragger.js`,
            `${srcPath}/js/ui.gallery.js`,
            `${srcPath}/js/ui.sidebartoggle.js`,
            `${srcPath}/js/ui.scopebartoggles.js`,
            `${srcPath}/js/ui.subcontenttoggle.js`,
            `${srcPath}/js/ui.topnavigation.js`,
            `${srcPath}/js/ui.tabs-scroller.js`,
            `${srcPath}/js/ui.main.js`,
            `${srcPath}/js/kquery.unset.js`,
        ],
        [`${distPath}/js/vue.js`]: [
            `${nodeModules}/promise-polyfill/dist/polyfill.js`,
            `${nodeModules}/vue/dist/vue.js`,
            `${nodeModules}/vuex/dist/vuex.js`,
            `${srcPath}/js/koowa.vue.js`
        ],
        [`${distPath}/js/debugger.js`]: [
            `${srcPath}/js/debugger.js`,
            `${srcPath}/js/dumper.js`
        ]
    };

    for (let [outFile, inFiles] of Object.entries(jsMap)) {
        await mason.fs.concat(inFiles, outFile);
        await mason.js.minify(outFile, outFile);
    }

    await fs.unlink(tmpFootable);
}

async function modernizr() {
    const destination = `${distPath}/js/modernizr.js`;

    return new Promise((r) => {
        require("customizr")({
            "quiet": true,
            "cache" : true,
            "dest": destination,
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
        }, async () => {
            await mason.js.minify(destination, destination);
            r();
        });
    })
}

async function css() {
    const scssMap = {
        [`${distPath}/css/admin.css`]: `${srcPath}/scss/admin-ui.scss`,
        [`${distPath}/css/bootstrap.css`]: `${srcPath}/scss/bootstrap.scss`,
        [`${distPath}/css/debugger.css`]: `${srcPath}/scss/debugger.scss`,
        [`${distPath}/css/site.css`]: `${srcPath}/scss/site.scss`,
    };

    for (let [outFile, inFile] of Object.entries(scssMap)) {
        await mason.sass.compile(inFile, outFile);
        await mason.sass.minify(inFile, outFile);
    }

    // Our namespacing creates an issue for the compressor
    let bootstrap = `${distPath}/css/bootstrap.css`;
    let bootstrapContents = (await fs.readFile(bootstrap)).toString();
    let find = /@page\s+\{\s+\.k-ui-namespace\s+\{\s+margin: 0\.5cm;\s+\}\s+\}/;
    let replace = '@page .k-ui-namespace { margin: 0.5cm; }';

    bootstrapContents = bootstrapContents.replace(find, replace);

    await fs.writeFile(bootstrap, bootstrapContents);
}

module.exports = {
    version: '1.0',
    tasks: {
        files,
        css,
        js,
        watch: {
            path: [srcPath],
            callback: async (path) => {
                if (path.endsWith('.scss')) {
                    await css();
                }
                else if (path.endsWith('.js')) {
                    await js();
                }
            },
        },
        default: ['files', 'js', 'css'],
    },
};
