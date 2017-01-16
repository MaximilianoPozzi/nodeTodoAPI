const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').deleteMany({name: 'Maximiliano'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("587af1a3333ac61b44c48c41")}).then((result) => {
        console.log(result)
    }, (err) => {
        console.log(err)
    });

    //db.close();
});