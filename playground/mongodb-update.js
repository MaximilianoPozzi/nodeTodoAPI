const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('587c0da5e41523d10b92c47c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Jen'
    }, {
        $set: {name: 'Maximiliano'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then(result => console.log(result),
            err => consols.log(err)
    );

    //db.close();
});