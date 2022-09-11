

class Sockets {

    constructor (io) {

        this.io = io;

        this.socketEvents(); 
    }

    socketEvents () {
        // On connection
        this.io.on('connection', ( socket ) => {
      
            // Escuchar el evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => { // El servidor escucha el  mensaje del cliente
                console.log(data);
                this.io.emit('mensaje-from-server', data ); // se manda un mensaje global a todos los namespaces
            });


            
        });
    }

}

module.exports = Sockets;