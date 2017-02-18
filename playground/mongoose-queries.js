const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '589bf71f6d5a4d0384b1976111';
//
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch((err) => console.log(err));

var userId = "587f1e411b368f1b48a37339"

if(!ObjectID.isValid(userId)){
    console.log('Invalid ID');
} else {
    User.findById(userId).then((user) => {
        if(!user){
            return console.log('User not found');
        }
        console.log('User', user);
    });
}
