
// Native Node Modules
var path = require("path");

// Other Node Modules
var helper = require("./helper");
var runSequence = require("run-sequence");
var sh = require("shelljs");
var ts = require('gulp-typescript');

/**
 * Used to perform compliation of the TypeScript source in the src directory and
 * output the JavaScript to the out location as specified in tsconfig.json (usually
 * www/js/bundle.js).
 *
 * It will also delegate to the vars and src tasks to copy in the original source
 * which can be used for debugging purposes. This will only occur if the build scheme
 * is not set to release.
 */
module.exports = function(gulp, plugins) {

    return function(cb) {

        gulp.src(['src/**/*.ts', 'typings/globals/**/*.d.ts', 'typings-custom/*.d.ts'])
        .pipe(ts({
            noImplicitAny: false,
            target: 'es5',
            out: 'bundle.js'
        }))
        .pipe(gulp.dest('www/js'));

        // if (result.code !== 0) {
        //     cb(new Error("Error running TypeScript compiler (tsc)."));
        //     return;
        // }

        // // For debug builds, we are done, but for release builds, minify the bundle.
        // if (helper.isDebugBuild()) {
        //     cb();
        // }
        // else {
        //     runSequence("minify", cb);
        // }
    };
};
