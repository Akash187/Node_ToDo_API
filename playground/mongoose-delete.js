const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modals/todo');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5ba5e3293d6a0fe792973cf4').then((doc) =>
//   console.log(doc)
// );

Todo.findOneAndRemove({_id : '5ba5e3293d6a0fe792973cf4'}).then((doc) => {
  console.log(doc);
});