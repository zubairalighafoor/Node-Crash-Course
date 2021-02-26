const eventEmitter=require('events');
const uuid = require('uuid');

class Logger extends eventEmitter{
    log(msg){
        // Call Event
        this.emit('message',{id:uuid.v4(),msg});
    }
}
const logger=new Logger();
logger.on('message',data=>console.log(data));
logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
