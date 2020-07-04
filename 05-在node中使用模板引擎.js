//1.安装npm install art-template
//2.在需要使用的文件模块中加载art-template
//只需要使用require方法加载就可以了
//require('art-template')
//即,install的名字是什么,则require中加载的就是什么
//3.查文档,使用模板引擎API
var template = require('art-template')
// 将模板源代码编译成函数并立刻执行
//template.render(source, data, options);
var tplStr = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p>大家好，我是{{ name }}</p>
    <p>我今年{{ age }}岁了</p>
    <h1>我来自{{ province }}岁了</h1>
    <p>我喜欢: {{ each hobbies}} {{$value}} {{ /each }}</p>
</body>
</html>
`
var ret = template.render(tplStr, {
    name: 'Jack',
    age: 18,
    province: '北京市',
    hobbies: [
        '写代码',
        '唱歌',
        '打游戏'
    ]
})
console.log(ret)