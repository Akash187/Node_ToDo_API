let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, function(err, client) {
  if (err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(err, result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});