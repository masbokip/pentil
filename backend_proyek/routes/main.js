const express = require('express');
const router = express.Router();

const { addReview, searchReview, getReview, editReview, addComment } = require('../controllers/review.js');
const { searchGame, getCover } = require('../controllers/igdb.js');
const { register, login, follow, unfollow } = require('../controllers/user.js');

router.post('/register', register);
router.post('/login', login);

router.post('/user/follow', follow);
router.post('/user/unfollow', unfollow);

router.post('/review/add', addReview);
router.get('/review', searchReview);
router.get('/review/:id', getReview);
router.post('/review/:id/edit', editReview);
router.post('/review/comment/add', addComment);

router.get('/game/search', searchGame);
router.get('/game/cover', getCover);

module.exports = router;