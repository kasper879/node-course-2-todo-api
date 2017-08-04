const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo'); 
const {User} = require('./../server/models/user'); 

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('59845306ed8f0259a6495c3d').then((todo) =>{
    console.log(todo); 
});

Todo.findOneAndRemove({_id: '59845306ed8f0259a6495c3d'}).then((todo) =>{
    console.log(todo); 
});