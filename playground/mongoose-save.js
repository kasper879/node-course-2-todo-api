var {mongoose} = require('./db/mongoose'); 


var newTodo = new Todo({
    text: 'Cook dinner',
    completed: false, 
    completedAt: 2
});

// newTodo.save().then((result) => {
//     console.log('saved todo', result);
// }, (e) => {
//     console.log('Unable to save todo');
// });

var newUser = new User({
    email: ''
}); 

newUser.save().then((result) =>{
    console.log(JSON.stringify(result, undefined, 2)); 
},(e) =>{
    console.log('Unable to create user', e)
});