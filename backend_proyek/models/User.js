const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true
  },
  name: String,
  password: String,
  email: String,
  following: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);