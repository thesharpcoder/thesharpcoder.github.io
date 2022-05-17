/// <binding AfterBuild='deploy-dev' Clean='clean' />
var gulp = require('gulp');
var del = require('del');
var log = require('fancy-log');

var production = (process.env.NODE_ENV === 'production'); //gulp.env.production

gulp.task('default', function (done) {
    log(production ? 'NODE_ENV is production' : 'NODE_ENV is not production');

    gulp.src([
        './node_modules/jquery/dist/jquery.js'])
    .pipe(gulp.dest('./scripts/'));

    log('copied jquery')

    done();
});

gulp.task('clean', function () {
    return del([
        //'dist/mobile/**/*', // here we use a globbing pattern to match everything inside the `mobile` folder
        //'!dist/mobile/deploy.json' // we don't want to clean this file though so we negate the pattern
        './scripts/vue-bundle.js', './scripts/mafias.js',
        './scripts/vue-bundle.*.js', './scripts/mafias.*.js'
    ]);
});

gulp.task('deploy', function (done) {
    log(production ? 'NODE_ENV is production' : 'NODE_ENV is not production');

    // gulp.src([
    //     './scripts/vue-bundle.*.js',
    //     //vue
    //     './scripts/mafias.*.js'])

    //     //.pipe(gulp.dest('?'));
    done();
});