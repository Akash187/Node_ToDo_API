//Javascript object destructuring
let {MongoClient, ObjectID} = require('mongodb');

let url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, function(err, client) {
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

  // db.collection('Todos').find({_id: new ObjectID('5b9c1acb645564412866336f')}).toArray().then((docs) => {
  //   console.log(`Todos \n ${JSON.stringify(docs, undefined, 2)}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count : ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close();
});