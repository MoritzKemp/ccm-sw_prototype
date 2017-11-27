self.addEventListener('message', event =>{
    importScripts( event.data.resource );
});

