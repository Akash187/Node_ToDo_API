const mongoose = require('mongoose');
const validator = require('validator');


// {
//   email: "andrew@example.com",
//   password: 'sdfdagfgvfgrgfvrdff',
//   tokens: [{
//     access: 'auth',
//     token: 'dfgfdgrtgvtgfgtrgfbfgghfgsgfbfgg'
//   }]
// }

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{Value} is not a valid email.`
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token:{
      type: String,
      require: true
    }
  }]
});

module.exports = {User};