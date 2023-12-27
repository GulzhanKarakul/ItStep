// Виталий, Тема с watch прикольная, только сохраняешь что то это уже есть в сжатой папке


import gulp from 'gulp'; // Подключаем Gulp
import uglify from 'gulp-uglify'; // Подключаем пакет для сжатия JavaScript
import watch from 'gulp-watch'; // Подключаем пакет для отслеживания изменений файлов
import htmlmin from 'gulp-htmlmin'; // Подключаем пакет для минификации HTML
import postcss from 'gulp-postcss'; // Подключаем пакет для обработки CSS
import autoprefixer from 'autoprefixer'; // Подключаем плагин для добавления вендорных префиксов
import cssnano from 'cssnano'; // Подключаем плагин для минификации CSS

// Задача для сжатия JavaScript-файлов
gulp.task('minify-js', () => {
    return gulp.src('public/js/*.js') // Берем исходные JavaScript-файлы из папки 'public/js'
        .pipe(uglify()) // Применяем сжатие с помощью пакета 'gulp-uglify'
        .pipe(gulp.dest('dist/js')); // Сохраняем сжатые файлы в папку 'dist/js'
});

// Задача для минификации HTML-файлов
gulp.task('minify-html', () => {
    return gulp.src('public/*.html') // Берем исходные HTML-файлы из папки 'public'
        .pipe(htmlmin({ collapseWhitespace: true })) // Применяем минификацию с помощью пакета 'gulp-htmlmin'
        .pipe(gulp.dest('dist')); // Сохраняем минифицированные файлы в папку 'dist'
});

// Задача для добавления вендорных префиксов и минификации CSS-файлов
gulp.task('process-css', () => {
    const plugins = [
        autoprefixer(), // Добавляем вендорные префиксы с помощью плагина 'autoprefixer'
        cssnano() // Минифицируем CSS-код с помощью плагина 'cssnano'
    ];

    return gulp.src('public/css/*.css') // Берем исходные CSS-файлы из папки 'public/css'
        .pipe(postcss(plugins)) // Применяем плагины 'autoprefixer' и 'cssnano' с помощью пакета 'gulp-postcss'
        .pipe(gulp.dest('dist/css')); // Сохраняем обработанные файлы CSS в папку 'dist/css'
});

// Задача для отслеживания изменений в файлах
gulp.task('watch', () => {
    gulp.watch('public/js/*.js', gulp.series('minify-js')); // Отслеживаем изменения в JavaScript-файлах и выполняем задачу 'minify-js'
    gulp.watch('public/*.html', gulp.series('minify-html')); // Отслеживаем изменения в HTML-файлах и выполняем задачу 'minify-html'
    gulp.watch('public/css/*.css', gulp.series('process-css')); // Отслеживаем изменения в CSS-файлах и выполняем задачу 'process-css'
});

// Задача по умолчанию, которая запускает все задачи
gulp.task('default', gulp.parallel('minify-js', 'minify-html', 'process-css', 'watch'));