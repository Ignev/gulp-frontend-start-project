import fs from 'fs';
import gulp from 'gulp';
import browserify from 'browserify';
import config from '../config';

export const scriptsBuild = () => (
  browserify(`${config.src.js}/main.js`)
    .transform('babelify', { presets: ['@babel/preset-env', '@babel/preset-react'] })
    .bundle()
    .pipe(fs.createWriteStream('bundle.js'))
);

export const scriptsWatch = () => gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
