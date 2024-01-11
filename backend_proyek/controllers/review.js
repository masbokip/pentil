const axios = require('axios');
require('dotenv').config();

const Review = require('../models/Review.js');

const addReview = async (req, res) => {
  await Review.create(req.body);

  return res.send('add-review');
}

const searchReview = async (req, res) => {
  let {query} = req.query;
  console.log(query)
  let reviews;
  try{
    reviews = await Review.find({
      // $or: [
        title: { $regex: '.*' + query + '.*' }
        // {game: { $regex: '.*' + query + '.*' }},
      // ]
    });
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }

  return res.send(reviews);
}

const getReview = async (req, res) => { 
  let {id} = req.params;
  let review;
  try{
    review = await Review.findOne({_id: id}).populate('comments.user').exec();
    
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }
  return res.send(review);
}

const editReview = async (req, res) => {
  const {id} = req.params;
  let {review, genres} = req.body;

  console.log(req.params)
  
  let review_editing;
  try{
    review_editing = await Review.findById(id);
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }

  if(genres){
    genres = genres.split(',');
    review_editing.genres = genres;
  }
  

  console.log(review_editing)
  console.log(review)
  if (review)
    review_editing.review = review;

  await review_editing.save();
  return res.send('Review updated');
}

const addComment = async (req, res) => {
  const {review_id, comment, user} = req.body;
  let review;
  try{
    review = await Review.findOne({_id: review_id});
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }
  console.log(review);
  review.comments.push({user: user, comment: comment});
  await review.save();
  return res.send('Comment added');
}

module.exports = { addReview, searchReview, getReview, addComment, editReview };