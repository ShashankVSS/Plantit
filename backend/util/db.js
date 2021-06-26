const mongoose = require( 'mongoose' );

// Mongoose Connection Class
class Connection {
    constructor() {
        const url = process.env.URI_MONGO;

        mongoose.Promise = global.Promise;
        mongoose.set( 'useNewUrlParser', true );
        mongoose.set( 'useFindAndModify', false );
        mongoose.set( 'useCreateIndex', true );
        mongoose.set( 'useUnifiedTopology', true );
        this.connect( url ).then( () => {
            console.log( `✔ Database Connected. ReadyState Status: ${mongoose.connection.readyState}` );            
        } ).catch( ( err ) => {
            console.error( '✘ MONGODB ERROR: ', err.message );
        } );

    }

    async connect( url ) {
        try {
            await mongoose.connect( url );
        } catch ( e ) {
            throw e;
        }
    }
}

module.exports = new Connection();