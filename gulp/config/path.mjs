


export const srcPath = 'src/'
export const destPath = 'dest/'

// f_9897324134d.jpg
const extImg = '{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}'
const extFonts = '{eot,woff,woff2,ttf,svg}'

export const path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: destPath,
        js: destPath + 'js/',
        css: destPath + 'css/',
        img: destPath + 'img/',
        img_sprite: destPath + '',
        fonts: destPath + 'fonts/',
    },
    src: { //Пути откуда брать исходники
        html: srcPath + '*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: srcPath + 'js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        css: srcPath + 'scss/*.scss',
        // img: srcPath + 'img/**/*.*',
        // img: srcPath + 'img/**/*.(jpg)',
        svg: srcPath + 'img/**/*.svg',
        img: srcPath + 'img/**/*.' + extImg, //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: srcPath + 'fonts/**/*.' + extFonts
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: srcPath + '**/*.html',
        js: srcPath + 'js/**/*.js',
        css: srcPath + 'scss/**/*.scss',
        img: srcPath + 'img/**/*.' + extImg,
        svg: srcPath + 'img/icon/**/*.{svg,}',
        fonts: srcPath + 'fonts/**/*.' + extFonts
    },
    base: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: srcPath ,
        js: srcPath + 'js/',
        css: srcPath + 'scss/',
        img: srcPath + 'img/',
        fonts: srcPath + 'fonts/'
    },
    clean: destPath + '*',
    // clean: './' + destPath,
    // bowerDir: './bower_components/'
//    bowerDir: './app/bower'
//    bowerDir: './app/bower/'
};
// console.log(path.src.img)


// export path;
