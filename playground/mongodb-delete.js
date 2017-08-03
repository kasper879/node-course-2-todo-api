//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDb server');

    //delete Many 
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // Delete one Item 
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>
    // {
    //     console.log(result); 
    // });

    //FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });


    //delete many for user collection 
    // db.collection('Users').deleteMany({ name: 'Pia' }).then((result) => {
    //     console.log(result);
    // });


     //Find a user and delete it by id    
     db.collection('Users').findOneAndDelete({
         _id: new ObjectID('5981f8859e3f912510503989')
     }).then((result) => {
        console.log(result);
    });
    


    // db.close();
}); 