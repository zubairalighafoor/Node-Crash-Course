const eventEmitter=require('events');
// Create Class
class MyEmitter extends eventEmitter{};
// Init Object
const myEmitter = new MyEmitter();
// Event Listner
myEmitter.on('event',()=>console.log("Event Fired!"));
//Init Event
myEmitter.emit('event');