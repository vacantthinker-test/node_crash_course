const path = require('path')

// base file name 文件名
// console.log(__filename)
console.log(path.basename(__filename))

// directory name 文件夹名称
console.log(path.dirname(__filename))

// file extension 文件后缀
console.log(path.extname(__filename))

// create path object 文件path对象
console.log(path.parse(__filename))

// concatenate path 文件path连接
console.log(path.join(__dirname, 'test', 'hello.html'))
