const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  user: String,
  comment: String,
});

const ReviewSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  game: String,
  title: String,
  review: {
    type: String,
    required: true,
  },
  image: String,
  rating: Number,
  comments: [{
      type: CommentSchema,
    }],
  genres: [String],
});

module.exports = mongoose.model('Review', ReviewSchema);