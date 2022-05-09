let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Front Assets
 |--------------------------------------------------------------------------
 */
let version = 6.5; //6.4

mix.scripts([
    'resources/app/assets/plugins/jquery/jquery-2.1.1.min.js',
    'resources/app/assets/plugins/moment/min/moment.min.js',
    //'resources/app/assets/plugins/dropzone/dist/dropzone.js',
    'resources/app/assets/plugins/chart.js/dist/Chart.min.js',
    //'resources/app/assets/plugins/fullcalendar/dist/fullcalendar.js',
    //'resources/app/assets/plugins/bootstrap-validator/dist/validator.min.js',
    //'resources/app/assets/plugins/select2/dist/js/select2.full.min.js',
    //'resources/app/assets/plugins/ckeditor/ckeditor.js',
    //'resources/app/assets/plugins/datatable/media/js/jquery.dataTables.min.js',
//	'resources/app/assets/plugins/datatable/media/js/dataTables.bootstrap4.min.js',
    'resources/app/assets/plugins/exort/uploader.min.js',
    'resources/app/assets/plugins/tether/dist/js/tether.min.js',
    'resources/app/assets/plugins/bootstrap/dist/js/bootstrap.min.js',
    //'resources/app/assets/plugins/owl-carousel/dist/owl.carousel.min.js',
    'resources/app/assets/plugins/slimscroll/jquery.slimscroll.min.js',
    'resources/app/assets/plugins/nanobar/nanobar.min.js',
    'resources/app/assets/plugins/jquery-ui/jquery-ui.min.js',
    //'resources/app/assets/plugins/bootstrap-daterangepicker/daterangepicker.js',
    'resources/app/assets/plugins/tilt/tilt.jquery.min.js',
    'resources/app/assets/plugins/alertify/alertify.js',
//	'resources/app/assets/plugins/tilt/tilt.jquery.min.js'
], 'public/app/js/vendor.js');

mix.js('resources/app/app.js', 'public/app/js/assets.js')/*.version()*/;
mix.sass('resources/app/app.scss', 'public/app/css/assets.css').options({
    processCssUrls: true
})/*.version()*/;

mix.copyDirectory('resources/app/assets/images', 'public/app/images');

mix.webpackConfig({
    output: {
        // Chunks in webpack
        publicPath: '/public/',
        chunkFilename: 'app/js/v/' + version + '/[name].js',
    },
});
