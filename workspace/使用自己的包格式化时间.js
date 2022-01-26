const {dateFormat,htmlEscape,htmlUnEscape} = require('./sugar_test')
let d = dateFormat(new Date())
console.log(d);

const str = `<h1 tile="abc">我是h1<span>123&nbsp;</span></h1>`
let escape_result = htmlEscape(str)
console.log(escape_result);

let unescape_result = htmlUnEscape(escape_result)
console.log(unescape_result);

