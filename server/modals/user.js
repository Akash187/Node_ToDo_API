const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');


// {
//   email: "andrew@example.com",
//   password: 'sdfdagfgvfgrgfvrdff',
//   tokens: [{
//     access: 'auth',
//     token: 'dfgfdgrtgvtgfgtrgfbfgghfgsgfbfgg'
//   }]
// }

let UserSchema = new mongoose.Schema({
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

UserSchema.methods.generateAuthToken = function(){
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toString(), access}, 'abc123').toString();
  user.tokens = user.tokens.concat([{access, token}]);
  return user.save().then(() => {
    return token;
  })
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};