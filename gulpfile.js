'use strict';
 
var gulp = require('gulp');
var fs  = require('fs');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var mainBowerFiles = require('gulp-main-bower-files');
var browserSync = require('browser-sync').create();
var flatten = require('gulp-flatten');
var logger = require('gulp-logger');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var twig = require('gulp-twig');
var data = require('gulp-data');
var path = require('path');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./public",
        port: 3010
    });
    gulp.watch('./frontend/stylesheets/**/*.scss', ['sass']);
    gulp.watch('./frontend/javascripts/**/*.js', ['public']);
    gulp.watch('./views/**/*.twig', ['twig']);
    gulp.watch('./frontend/images', ['images']);
    gulp.watch('./frontend/fonts', ['fonts']);
});

gulp.task('main-bower-files',  function() {
     return gulp.src('./bower.json')
        .pipe(mainBowerFiles(['**/*.js']))
        .pipe(flatten())
        .pipe(logger())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function () {
    return gulp.src('./frontend/stylesheets/**/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass().on('error', sass.logError))
       .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
       .pipe(cleanCSS({compatibility: 'ie8'}))
       .pipe(sourcemaps.write('./maps'))
       .pipe(gulp.dest('./public/css'))
       .pipe(browserSync.stream());
});

gulp.task('public', ['main-bower-files'], function(){
    return gulp.src('./frontend/javascripts/*.js')
    .pipe(gulp.dest('./public/js'))
    .pipe(logger())
    .pipe(browserSync.stream());
});

gulp.task('images', function(){
    return gulp.src(['./frontend/images/*.jpg', './frontend/images/*.png'])
    .pipe(gulp.dest('./public/images'))
    .pipe(logger())
    .pipe(browserSync.stream());
});

gulp.task('fonts', function(){
    return gulp.src(['./frontend/fonts/*.eot', './frontend/fonts/*.svg', './frontend/fonts/*.ttf', './frontend/fonts/*.woff'])
    .pipe(gulp.dest('./public/fonts'))
    .pipe(logger())
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'public', 'twig', 'images', 'fonts']);

gulp.task('twig', function () {
	return gulp.src('./views/pages/*.twig')
		.pipe(data(function(file) {
			return JSON.parse(fs.readFileSync('./fixtures/' + path.basename(file.path, '.twig') + '.json'));
		}))
		.pipe(twig())
		.pipe(gulp.dest('./public'))
		.pipe(browserSync.stream());
});
