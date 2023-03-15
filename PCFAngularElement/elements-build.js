const concat = require('concat');
(async function build() {
const files = [
'./dist/pcfangular-element/runtime.js',
'./dist/pcfangular-element/polyfills.js',
//'./dist/PCFAngulaElement/scripts.js',
'./dist/pcfangular-element/main.js'
];
await concat(files, './dist/pcfangular-element/bundle.js');
await concat(files, './plainHTML/bundle.js');
})();