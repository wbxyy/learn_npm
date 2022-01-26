## 安装
```
npm i sugar_test
```

## 导入
```js
const sugar_test = require('sugar_test')
```

## 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
let d = dateFormat(new Date())
// 结果 2022-01-25 17:39:45
console.log(d);
```

## 转义 HTML 中的特殊字符
```js
// 待转换的 HTML 字符串
const str = `<h1 tile="abc">我是h1<span>123&nbsp;</span></h1>`
// 调用 htmlEscape 方法进行转换
let escape_result = htmlEscape(str)
// 结果 &lt;h1 tile=&quot;abc&quot;&gt;我是h1&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(escape_result);
```

## 还原 HTML 中的特殊字符
```js
// 调用 htmlUnEscape 方法进行还原
let unescape_result = htmlUnEscape(escape_result)
// 结果 <h1 tile="abc">我是h1<span>123&nbsp;</span></h1>
console.log(unescape_result);
``` 

## 开源许可
ISC