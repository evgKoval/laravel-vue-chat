const mix = require('laravel-mix');
require('vuetifyjs-mix-extension');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vuetify('vuetify-loader')
    .vue({ version: 2 })
    .postCss('resources/css/app.css', 'public/css', [])
    .alias({ '@': 'resources/js' });