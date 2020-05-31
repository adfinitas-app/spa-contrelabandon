const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const rimraf = require("gulp-rimraf");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const terser = require("gulp-terser");
const browser = require("browser-sync");
const useref = require("gulp-useref");
const babel = require("gulp-babel");
const fileinclude = require("gulp-file-include");

const BUILD_FOLDER = "./dist";

// Delete the "dist" folder
// This happens every time a build starts
function clean(cb) {
	return src(BUILD_FOLDER, { read: false, allowEmpty: true }).pipe(rimraf());
}

//Move index.html to build folder
function index(cb) {
	return (
		src("src/index.html")
			//.pipe(useref())
			.pipe(dest(BUILD_FOLDER))
	);
}

// Compile Sass into CSS
function compileSass(cb) {
	return src("src/assets/scss/**/styles.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(concat("styles.css"))
		.pipe(
			rename({
				basename: "styles",
				suffix: ".min",
				extname: ".css",
			})
		)
		.pipe(dest(`${BUILD_FOLDER}/assets/css`));
}

// Copy and compress images
function images(cb) {
	return src(["src/assets/img/**/*"])
		.pipe(imagemin())
		.pipe(dest(`${BUILD_FOLDER}/assets/img`));
}

// Copy docs
function docs(cb) {
	return src(["src/assets/docs/**/*"]).pipe(dest(`${BUILD_FOLDER}/assets/docs`));
}

// Copy fonts
function fonts(cb) {
	return src(["src/assets/fonts/**/*"]).pipe(dest(`${BUILD_FOLDER}/assets/fonts`));
}

// Inline CSS
function inlineCss(cb) {
	return (
		src(`${BUILD_FOLDER}/**/*.css`)
			//.pipe(sourcemaps.init())
			.pipe(
				autoprefixer({
					cascade: false,
				})
			)
			.pipe(
				cleanCSS({
					debug: true,
					compatibility: "ie8",
				})
			)
			.pipe(dest(`${BUILD_FOLDER}`))
	);
	//.pipe(sourcemaps.write())
}

// Inline JS
function inlineJs(cb) {
	return (
		src(`src/assets/js/**/*.js`)
			//.pipe(sourcemaps.init())
			.pipe(babel({ presets: ["@babel/preset-env"] }))
			.pipe(terser())
			.pipe(dest(`${BUILD_FOLDER}/assets/js`))
	);
	//.pipe(sourcemaps.write())
}

//fileInclude
function fileInclude() {
	return src(["src/index.html", "src/subpages/**/*.html"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file"
			})
		)
		.pipe(dest(BUILD_FOLDER));
}

// Start a server with LiveReload to preview the site in
function server(cb) {
	browser.init({
		server: "dist",
	});
	cb();
}

// Watch for file changes
function mywatch() {
	watch("src/**/*.html").on("all", series(index, fileInclude, browser.reload));
	watch("src/assets/scss/**/*.scss").on("all", series(compileSass, inlineCss, browser.reload));
	watch("src/assets/js/**/*.js").on("all", series(inlineJs, browser.reload));
	watch("src/assets/img/**/*").on("all", series(images, browser.reload));
	watch("src/assets/docs/**/*").on("all", series(docs, browser.reload));
	watch("src/assets/fonts/**/*").on("all", series(fonts, browser.reload));
}

exports.clean = clean;
exports.index = index;
exports.compileSass = compileSass;
exports.images = images;
exports.docs = docs;
exports.fonts = fonts;
exports.inlineCss = inlineCss;
exports.inlineJs = inlineJs;
exports.fileInclude = fileInclude;

exports.default = series(
	clean,
    index,
    fileInclude,
	compileSass,
	inlineCss,
	inlineJs,
	images,
	fonts,
	docs,
	server,
	mywatch
);
