/* eslint-disable */
import gulp from 'gulp';
import path from 'path';
import ifPlugin from 'gulp-if';

// Передаем значения в глобальную переменную
global.app = {
  isdist: process.argv.includes('--dist'),
  isDev: !process.argv.includes('--dist'),
  gulp: gulp,
  if: ifPlugin
};

import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import stripCssComments from 'gulp-strip-css-comments';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import htmlmin from 'gulp-htmlmin';
import posthtml from 'gulp-posthtml';
import include from 'posthtml-include';
import del from 'del';
import ghPages from 'gh-pages';
import newer from 'gulp-newer'; // Проверка обновления
import zipPlugin from 'gulp-zip'

export const zip = () => {
  del(`./dist.zip`)

  return gulp.src(`dist/**/*.*`, {})
    .pipe(zipPlugin(`dist.zip`))
    .pipe(gulp.dest('./'))
}

// fonts
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

const otfToTtf = () => {
  // Ищем файлы шрифтов .otf
  return gulp.src('source/fonts/*.otf', {})
    // Конвертируем в .ttf
    .pipe(fonter({
      formats: ['ttf']
    }))
    // Выгружаем в исходную папку
    .pipe(gulp.dest(`source/fonts/`))
};

const ttfToWoff = () => {
  // Ищем файлы шрифтов .ttf
  return gulp.src('source/fonts/*.ttf', {})
    // Конвертируем в .woff
    .pipe(fonter({
      formats: ['woff']
    }))
    // выгружаем в папку с результатом
    .pipe(gulp.dest('dist/fonts/'))
    // ищем файлы шрифтов .ttf
    .pipe(gulp.src('source/fonts/*.ttf'))
    // конвертируем в .woff2
    .pipe(ttf2woff2())
    // выгружаем в папку с результатом
    .pipe(gulp.dest('dist/fonts/'))
};

const copyFontsWoff = () => {
  return gulp.src([
    "source/fonts/*.{woff,woff2}"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("dist"));
};

const fontStyle = () => {

  // Файл стилей подключения шрифтов
  let fontsFile = `source/sass/fonts.scss`;
  // Проверяем существуют ли файлы шрифтов
  fs.readdir('dist/fonts/', function (err, fontsFiles) {
    if (fontsFiles) {
      // Проверяем существует ли файл стилей для подключения шрифтов
      if (!fs.existsSync(fontsFile)) {
        // Если файла нет, создаем его
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          // Записываем подключения шрифтов в файл стилей
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;

            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700;
            } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }

            fs.appendFile(fontsFile,
              `@font-face {
                font-family: ${fontName};
                font-display: swap;
                src: url("../fonts/${fontFileName}.woff2") format("woff2"),
                    url("../fonts/${fontFileName}.woff") format("woff");
                font-weight: ${fontWeight};
                font-style: normal;
              }\r\n`, cb);
            newFileOnly = fontFileName;
          }
        }
      } else {
        // Если файл есть нужно его удалить
        console.log('Файл sass/fonts.scss уже существует. Для обновления файла нужно его удалить!');
      }
    }
  });

  return gulp.src('./source');
  function cb() { }
};
// Последовательная обработка шрифтов
const fonts = gulp.series(copyFontsWoff, otfToTtf, ttfToWoff, fontStyle)

// gh-pages
const deploy = (cb) => {
  return ghPages.publish(path.join(process.cwd(), './dist'), cb);
};

const css = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(stripCssComments(false))
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
};

const js = () => {
  return gulp.src('source/js/main.js', { sourcemaps: app.isDev })
    .pipe(webpack({
      mode: app.isdist ? 'production' : 'development',
      output: { filename: 'main.min.js' }
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.src('source/js/main.js'))
    .pipe(gulp.dest('dist/js'))
};

const refresh = (done) => {
  browserSync.reload();
  done();
};

const serverInit = () => {
  browserSync.init({
    server: {
      baseDir: 'dist/',
    },
    notify: false,
    port: 3000,
  })

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series(css));
  gulp.watch('source/img/icons/*.svg', gulp.series(copySvg, sprite, html, refresh));
  gulp.watch('source/**/*.html', gulp.series(html, refresh));
  gulp.watch('source/js/**/*.js', gulp.series(js, refresh));
};

const images = () => {
  return gulp.src('source/img/**/*.{jpg,jpeg,png,gif,webp}')
    .pipe(newer('dist/img'))
    .pipe(app.if(app.isdist, webp({ quality: 75 })))
    .pipe(app.if(app.isdist, gulp.dest('dist/img')))
    .pipe(app.if(app.isdist, gulp.src('source/img/**/*.{jpg,jpeg,png,gif,webp}')))
    .pipe(app.if(app.isdist, newer('dist/img')))
    .pipe(app.if(app.isdist, imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 4 // 0 to 7
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe(gulp.src('source/img/**/*.svg'))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream())
}

const copySvg = () => {
  return gulp.src('source/img/**/*.svg', { base: 'source' })
    .pipe(gulp.dest('dist'));
};

const sprite = () => {
  return gulp.src('source/img/icons/**/*.svg')
    .pipe(svgstore({ inlineSvg: false }))
    .pipe(rename('sprite_auto.svg'))
    .pipe(gulp.dest('dist/img'))
};

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({
      removeComments: true
    }))
    .pipe(posthtml([
      include(),
    ]))
    .pipe(gulp.dest('dist'))
};

const copy = () => {
  return gulp.src([
    "source/**/*.ico",
    "source/js/vendors/*.js",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("dist"));

};

const clean = () => {
  return del('dist');
};

const mainTasks = gulp.series(fonts, sprite, gulp.parallel(copy, html, css, js, images));
// Построение сценариев выполнения задач
const dev = gulp.series(clean, mainTasks, serverInit);
const build = gulp.series(clean, mainTasks);

// zip архив
const deployZIP = gulp.series(clean, mainTasks, zip)

export { dev }
export { build }
export { deploy }
export { deployZIP }

// Выполнение сценария по умолчанию
gulp.task('default', dev)
