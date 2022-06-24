let mix = require('laravel-mix')
let path = require('path')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/field.js', 'js')
    .vue({ version: 3 })
    .alias({
        'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
        '@': path.join(__dirname, 'resources/js/')
    })
    .nova('timothyasp/nova-color-field')
