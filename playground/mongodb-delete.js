//Javascript object destructuring
let {MongoClient, ObjectID} = require('mongodb');

let url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, function(err, client) {
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

  //deleteMany
  db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  client.close();
});