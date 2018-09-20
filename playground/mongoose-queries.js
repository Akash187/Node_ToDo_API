const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modals/todo');

let id = "5ba4019431d51040dc2aa053";

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
}, (e) => {
  console.log('Error');
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
}, (e) => {
  console.log('Error');
});

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log("I'd not found");
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));