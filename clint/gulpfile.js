const glup = require("gulp");
const glupSass = require("gulp-sass");
const sass = glupSass(require("sass"));

glup.task("sass", async function () {
  glup.src("src/*.scss").pipe(sass()).pipe(glup.dest("src/css"));
});
