const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo'); 
const {User} = require('./../server/models/user'); 

var id = '5983873d0776c5f01f68b152';
// if(!ObjectID.isValid(id)){
//     console.log('Id not valid')
// }



// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todos', todo); 
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found'); 
//     }
//     console.log('Todo', todo); 
// }).catch((e) => console.log(e)); 

User.findById(id).then((user) => {
    if(!user){
        return console.log('No user was found')
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    Console.log('bad request ', e); 
}); 