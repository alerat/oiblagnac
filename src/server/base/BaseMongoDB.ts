import * as mongoose from 'mongoose';
const database = 'mongodb://application:application@ds117178.mlab.com:17178/oi-blagnac';
export const options = {  socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
};

export function connexionDatabase(): void {
    mongoose.connect(database, options);
    mongoose.connection.on('error', () => {
        console.log('MongoDB connection error. Please make sure MongoDB is running.');
        process.exit();
    });
}


export function connexion() {
    mongoose.connect(database, options);
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
    db.once('open', function () {
            console.log('Connexion à la base réalisée');
    });
}
export function deconnexion() {
    mongoose.connection.close();
    console.log('Déconnexion de la base');
}
