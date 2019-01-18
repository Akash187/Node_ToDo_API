const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id : 10,
  access : 'auth'
};

let token = jwt.sign(data, '123abc');
console.log(token);

let decoded = jwt.verify(token, '123abc');
console.log(decoded);