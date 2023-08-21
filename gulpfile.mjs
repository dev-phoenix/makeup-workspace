"use strict"

import gulp from "gulp"
const {src, dest} = gulp
// const gulp = require("gulp")
import autoprefixer from "gulp-autoprefixer"
import cssbeautify from "gulp-cssbeautify"
import removeComments from "gulp-strip-css-comments"
import rename from "gulp-rename"
import rigger from "gulp-rigger"
import dartSass from "sass"
import gulpSass from "gulp-sass"
const sass = gulpSass(dartSass)
import cssnano from "gulp-cssnano"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"
import panini from "panini"
// const imagemin = require("gulp-imagemin")
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from "gulp-imagemin"
// import { del } from "del"
import { deleteAsync, deleteSync } from "del"
import notify from "gulp-notify"
import browserSync from "browser-sync"
import fileinclude from "gulp-file-include"
import webpack from "webpack-stream";
import sourcemaps from 'gulp-sourcemaps'
import svgSprite from "gulp-svg-sprite";

// import pkg from './gulp/config/path.mjs'
import { path, srcPath, destPath } from './gulp/config/path.mjs'
// reload = browserSync.reload;

console.log(222,process.argv,333)
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp
	// plugins: plugins
}

var useTunnels=false;
//var useTunnels=true;
// инициализируем сайты
var sites = [
//    'd1/',
//    'd2/',
//    's1/',
//    's2/',
//    's3/'
    // 'd3/',
    'mt_001/',
    // 'mt_002/',
];

// инициализируем перезагрузку сайтов
var servers = [];
function webserver_reload(site, i, arr){
    servers[i]=browserSync;
//    servers[i].reload({stream: true})
};
sites.forEach(webserver_reload);


//===============
var webserver_conf = []
function _servers_names(server, i, arr){
    servers.forEach(_servers_names)
}
var serversNames = []
function servers_names(){
    servers.forEach()
}
function _html(site, i, arr){
    panini.refresh()
    return src(site + path.src.html, 
        {base: site + srcPath})
	.pipe(plumber(
		notify.onError({
			title: "HTML",
            subtitle: "Failure!",
			message: "Error: <%= error.message %>",
            sound:    "Beep" // Frog Pop
		})
	))
    .pipe(panini({
        root: site + srcPath,
        layouts: site + srcPath + 'html',
        partials: site + srcPath + 'html',
        helpers: site + srcPath + 'html/components/',
        component: site + srcPath + 'html/components/',
    }
    ))
    .on('error', console.error.bind(console))
    .pipe(fileinclude({
        context: {
            arr: [2,5,8],
            site_name: site,
            servers: webserver_conf
        }
    }))
    .pipe(dest(site + path.build.html))
    .pipe(servers[i].reload({stream: true}))
    .pipe(notify({ // Add gulpif here
        title: 'Gulp HTML',
        subtitle: 'success',
        message: 'HTML task reload',
        sound: "Beep"
    }))
    ;
}
const html = (done)=>{
    sites.forEach(_html)
    done();
}
const cssmap = (done)=>{
    sourcemaps.write('.')
    // done();
    return notify({ // Add gulpif here
        title: 'Gulp CSS map',
        subtitle: 'success',
        message: 'CSS map task '
    })
}

function serv_relod(servers,stype){
    console.log('--------')
    console.log('Start server reload. '+stype+' changed.')
    // console.log(ars)
    // s = servers[i].reload({stream: true})
    let s = servers.reload({stream: true})
    // console.log(s)
    return s
}
function _css(site, i, arr){
    var mode = app.isBuild ? 'Production' : 'Development'
    console.log('Webpack mode (css):', mode)
    // console.log(servers)
    return src(site + path.src.css,{base: site + path.base.css, sourcemaps: true })
    // return src(site + path.src.css,{base: site + path.base.css })
        .pipe(plumber(
            notify.onError({
                title: "CSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(serv_relod(servers[i]), 'CSS')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(sourcemaps.write('.'))
        // .pipe(cssmap())
        .pipe(dest(site + path.build.css))
        // .pipe(servers[i].reload({stream: true}))
        // .pipe(servers[i].reload({stream: true}))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(dest(site + path.build.css))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp CSS',
            subtitle: 'success',
            message: 'CSS task reload',
            sound: "Beep"
        }))
        // .pipe(serv_relod(servers[i]))
        ;
}
const css = (done)=>{
    sites.forEach(_css)
    done();
}

function _js(site, i, arr){
    var mode = app.isBuild ? 'production' : 'development'
    console.log('webpack mode:', mode)
    return src(site + path.src.js,{base: site + path.base.js, sourcemaps: true })
        .pipe(plumber(
            notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(sourcemaps.init())
        .pipe(rigger())
        .pipe(dest(site + path.build.js))
        .pipe(uglify())
        .pipe(webpack({
			mode: mode,
			output: {
				filename: 'app.min.js'
			}
            
        }))
        // .pipe(rename({
        //     suffix: '.min',
        //     extname: '.js'
        // }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(site + path.build.js))
        .pipe(servers[i].reload({stream: true}))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp JS',
            subtitle: 'success',
            message: 'JS task reload',
            sound: "Beep"
        }));
}
const js = (done)=>{
    sites.forEach(_js)
    done();
}

function _images(site, i, arr){
    return src(site + path.src.img,{base: site + path.base.img})
        // .pipe(imagemin([
        //         gifsicle({interlaced: true}),
        //         mozjpeg({quality: 75, progressive: true}),
        //         optipng({optimizationLevel: 1}), // 5
        //         svgo({
        //             plugins: [
        //                 {removeViewBox: true},
        //                 {cleanupIDs: false}
        //             ]
        //         })
        // //     imagemin.gifsicle({interlaced: true}),
        // //     imagemin.mozjpeg({quality: 75, progressive: true}),
        // //     imagemin.optipng({optimizationLevel: 5}),
        // //     imagemin.svgo({
        // //         plugins: [
        // //             {removeViewBox: true},
        // //             {cleanupIDs: false}
        // //         ]
        // //     })
        // ]))
        .pipe(dest(site + path.build.img))
        .pipe(servers[i].reload({stream: true}));
}
const images = (done)=>{
    sites.forEach(_images)
    done();
}

// http://localhost:9000/img/stack/sprite.stack.html
function _svgImages(site, i, arr){
    return src(site + path.src.svg,{base: site + path.base.img})
	.pipe(plumber(
		notify.onError({
			title: "SVG",
			message: "Error: <%= error.message %>"
		})
	))
	.pipe(svgSprite({
		mode: {
			stack: {
				sprite: `../icon/icons.svg`,
				example: true
			}
		}
	}))
    .pipe(dest(site + path.build.img))
    .pipe(servers[i].reload({stream: true}));
}
const svgIcon = (done) => {
    sites.forEach(_svgImages)
    done()
}

function _fonts(site, i, arr){
    return src(site + path.src.fonts,{base: site + path.base.fonts })
        .pipe(dest(site + path.build.fonts))
        .pipe(servers[i].reload({stream: true}));
}
const fonts = (done)=>{
    sites.forEach(_fonts)
    done();
}

function _clean(site, i, arr){
    return deleteSync( './' + site + path.clean)
}
const clean = (done)=>{
    sites.forEach(_clean)
    done();
}

//===============
function _webserver_conf(site, i, arr){
    webserver_conf[i] = {
            site_name: site,
            server: {
                baseDir: "./" + site + destPath
                // baseDir: "./"+site+"build"
            },
    //        tunnel: true,
    //        tunnel: 0,
            tunnel: useTunnels,
    //        host: (site.substr(0,(site.length-1)))+'.localhost',
            host: site.replace('/','.') + 'localhost',
    //        host: 's'+(i+1)+'.localhost',
            port: 9000+i,
            ui: {
                host: site.replace('/','.') + 'localhost',
                port: 3000+i
            },
            logPrefix: "Frontend_Devil " + site + " " +  (i)
    //        logPrefix: "Frontend_Devil_"+i
        }
}
sites.forEach(_webserver_conf)

// запуск инициализированных серверов
function _webserver(site, i, arr){
    // console.log(site)
    // console.log(typeof site)
    // console.log(site.replace('/','.') + 'localhost')
    //    reload = browserSync.reload;
        var srv_config_ini = webserver_conf[i];
        console.log ( 'srv_config_ini.host = ' + srv_config_ini.host )
    //    config = config_ini;
        
        servers[i] = browserSync.create('Server '+(i+1));
    //    servers[i] = require("browser-sync").create('Server '+(i+1));
        servers[i].init(srv_config_ini);
    };
function webserver(done){
    sites.forEach(_webserver);
//    browserSync(config);
    done()
}

gulp.task('webserver', webserver);

import * as nodePath from 'path';
import {t2} from './test.js'

function test(done){
    let a = t2(), b = nodePath.basename(a)
    console.log(a,b)
    sites.forEach((site, i, arr)=>{
        console.log(site)
        console.log(typeof site)
        console.log(site.replace('/','.') + 'localhost')
    });
    done()
}
export {test}

//===============

function onChange(path, stats) {
    console.log(`File ${path} was changed`);
}
function onAdd(path, stats) {
    console.log(`File ${path} was added`);
}
function onUnlnk(path, stats) {
    console.log(`File ${path} was removed`);
}

function _watchFiles(site) {
    const w1 = gulp.watch(site + path.watch.html, html)
    const w2 = gulp.watch(site + path.watch.css, css)
    const w3 = gulp.watch(site + path.watch.js, js)
    const w4 = gulp.watch(site + path.watch.img, images)
    const w42 = gulp.watch(site + path.watch.svg, svgIcon)
    const w5 = gulp.watch(site + path.watch.fonts, fonts)

    w1.on('change', onChange);
    w1.on('add', onAdd);
    w1.on('unlink', onUnlnk);

    w2.on('change', onChange);
    w2.on('add', onAdd);
    w2.on('unlink', onUnlnk);

    w3.on('change', onChange);
    w3.on('add', onAdd);
    w3.on('unlink', onUnlnk);

    w4.on('change', onChange);
    w4.on('add', onAdd);
    w4.on('unlink', onUnlnk);

    w42.on('change', onChange);
    w42.on('add', onAdd);
    w42.on('unlink', onUnlnk);

    w5.on('change', onChange);
    w5.on('add', onAdd);
    w5.on('unlink', onUnlnk);
}
const watchFiles = (done)=>{
    sites.forEach(_watchFiles)
    done();
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, svgIcon, fonts ) )
const watch = gulp.parallel(build, watchFiles, webserver)


//===============
export { html }
export { css }
export { js }
export { images }
export { svgIcon }
export { clean }
export { fonts }
export { build }
export { watch }
// export { webserver }
//===============

const defTasks = gulp.series(watch)


gulp.task('default', defTasks);
// gulp.task('default', [
//     html
// //    'build',
// //    'webserver',
// //    'watch'
// ]);