const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html")).on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);


// copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
}

exports.copy = copy;

// imagemin

const images = () => {
  return gulp.src("build/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

//webp

const webpmin = () => {
  return gulp.src("build/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.webp = webpmin;

// svgstore-social

const spriteSoc = () => {
  return gulp.src("build/img/**/social-*.svg")
    .pipe(svgstore())
    .pipe(rename("socials-sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.spriteSoc = spriteSoc;

// svgstore-flags

const spriteFlag = () => {
  return gulp.src("build/img/**/flag-*.svg")
    .pipe(svgstore())
    .pipe(rename("flags-sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.spriteFlag = spriteFlag;

// svgstore-transports

const spriteTr = () => {
  return gulp.src("build/img/**/transport-*.svg")
    .pipe(svgstore())
    .pipe(rename("transports-sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.spriteTr = spriteTr;

// svgstore-contacts

const spriteContacts = () => {
  return gulp.src("build/img/**/contact-*.svg")
    .pipe(svgstore())
    .pipe(rename("contacts-sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.spriteContacts = spriteContacts;

// svgstore

const sprite = () => {
  return gulp.src("build/img/**/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;

//clean

const clean = () => {
  return del("build");
}

exports.clean = clean;

//html

const html = () => {
  return gulp.src("source/**/*.html", {base: "source"})
    .pipe(gulp.dest("build"));
}

exports.html = html;

//build

const build = (done) => gulp.series(
  "clean",
  "copy",
  "styles",
  "images",
  "webp",
  "sprite",
  "html")(done);

exports.build = build;

//start

const start = (done) => gulp.series(
  "build",
  "server",)(done);

exports.start = gulp.series(
  start, watcher
);
