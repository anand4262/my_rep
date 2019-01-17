var events = require('events');

var em = new events.EventEmitter();
//subscribing of event 
em.on('FirstEvent', function(){
    console.log('the first event is subsribed')
});
//Raise or publishing the event
em.emit('FirstEvent');
em.on('SecondEvent', function(data){
    console.log('message: '+data);
});
//Raise or publishing the event
em.emit('SecondEvent', `The second event is subscribed`);