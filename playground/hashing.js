const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    // Store hash in your password DB.
    return hash;
  });
});

let hashedPassword = "$2a$10$KgihXPGnHpEbwNAGrnDRh.M6UP/24MHmPTGIdw9s85jlzC/cF3SUK";

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});




// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

// let data = {
//   id : 10,
//   access : 'auth'
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log(decoded);