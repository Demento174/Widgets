const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/widgets/tradeIn/index.js', 'public/js/tradeIn')
    .js('resources/widgets/UTM/index.js', 'public/js/UTM/')
   .less('resources/less/style.less', 'public/css/');

mix.webpackConfig({
    node: {
        fs: "empty"
    },
    resolve: {
        alias: {
            "handlebars" : "handlebars/dist/handlebars.js"
        }
    },
});
