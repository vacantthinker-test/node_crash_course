const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter{
	log(msg){
		// call event
		this.emit('message', {id: uuid.v4(), msg})
	}
}
// module.exports = Logger

// 使用示例 如下
// const Logger = require('./logger')

const logger = new Logger()

logger.on('message',(data)=>{
	console.log('called listener:', data)
})
logger.log('hello world')
logger.log('hi')
logger.log('hello')
