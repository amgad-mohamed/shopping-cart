const glup = require("gulp");
const glupSass = require("gulp-sass");
const sass = glupSass(require("sass"));

glup.task("watch", async function () {
  glup.watch(
    ["src/components/**/*.scss", "src/pages/*.scss"],
    async function () {
      glup
        .src(["src/components/**/*.scss", "src/pages/*.scss"])
        .pipe(sass())
        .pipe(glup.dest("src/css"));
    }
  );
});
