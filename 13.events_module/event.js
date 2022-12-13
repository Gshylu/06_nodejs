// Events module
/* they are in-bulit module  and u can create ,fire and listen for your own events
ex - 1  Registering for the event to be  fired only one time using once
ex-2  create an event emitter instance and register a  couple of callbacks
ex-3 registering for the event with callback parameters */



const EventEmitter = require("events"); // it's class  must be capital

//const event = require("events");
const event = new EventEmitter();

/*event.on('sayMyName',()=>{
    console.log("your name is shylu")

});
event.on('sayMyName',()=>{
    console.log("your name is GANNOJI")

});

event.on('sayMyName',()=>{
    console.log("your name is ANY")

});*/

event.on("checkpage", (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)

});

event.emit("checkpage",200, "ok");
//event.emit('sayMyName');


//the concept is quite simple : emiiter objects emit named events that cause
//previously registered listeners to be  called. so an emitter object basically has two main features:
//emitting name events.
//registering and unregistering listener functions.
