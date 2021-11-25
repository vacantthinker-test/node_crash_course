// 实际node.js 运行时, 把整个代码包裹起来, 作为一个module来使用
// module wrapper function
// (function (exports, require, module, __filename, __dirname){
//
// })

console.log(__dirname, __filename)

class Person {
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}
	greeting(){
		console.log(`my name is ${this.name} and i amd ${this.age}`)
	}
}

module.exports = Person // commonjs规范 导出
