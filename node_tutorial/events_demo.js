
const Events = require('events');

const customEvent = new Events();
const customEvent2 = new Events();

customEvent.on('request',(name)=>{
    console.log(`Request Recieved from ${name}`);
})

customEvent.emit('request', 'Smeogal');
customEvent.emit('request', 'Muh');
customEvent.emit('request', 'Mal');

//have to be events from the same object?
customEvent2.emit('request');