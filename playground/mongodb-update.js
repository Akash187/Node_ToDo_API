//Javascript object destructuring
let {MongoClient, ObjectID} = require('mongodb');

let url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, function(err, client) {
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID("5b9c2a9a6455644128663766")
  },{
    $set: {
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});