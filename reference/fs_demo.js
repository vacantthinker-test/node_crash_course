const fs = require('fs')
const path = require('path')

console.log('__dirname',__dirname)
// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// 	if (err) {
// 		throw err
// 	}
// 	console.log('folder created...')
// })

// create and write to file
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'hello world',
// 	err => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log('file written to ...')
// 	})
// // 覆写 覆盖写入
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	' i love js',
// 	err => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log('file written to ...')
// 	})
// // 写入文件内容 然后追加内容
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	' hello world ',
// 	err => {
// 		if (err) {
// 			throw err
// 		}
// 		console.log('file written to ...')
// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			' i love js',
// 			err => {
// 				if (err) {
// 					throw err
// 				}
// 				console.log('file written to ...')
// 			})
// 	})

// read file 读取文件
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
	if (err) {
		throw err
	}
	console.log(data)
})

// rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloworld.txt'),
	(err,data) => {
	if (err) {
		throw err
	}
	console.log('file renamed ...')
})
