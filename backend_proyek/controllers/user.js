const bcrypt = require('bcrypt');

const User = require('../models/User.js');

const register = async (req, res) => {
  let {password} = req.body;
  let hash;
  try{
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(409).send('Email already exists');
    }

    hash = await bcrypt.hash(password, 10);
  }catch(e){
    console.log(e);
    console.log(req.body)
    return res.status(500).send('Internal Server Error');
  }
  req.body.password = hash;

  await User.create(req.body);
    
  return res.send('register');
}

const login = async (req, res) => {
  let {email, password} = req.body;
  let user;
  try{
    user = await User.findOne({email: email});
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }
  let result = bcrypt.compare(password, user.password);
  if(result){
    console.log(user.name);
    return res.send(user);
  }else{
    return res.status(401).send('Invalid Credentials');
  }
}

const follow = async (req, res) => {
  let {user_id, follow_id} = req.body;
  let user;
  try{
    user = await User.findById(user_id);
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }
  if(user.following.includes(follow_id)){
    return res.status(409).send('Already followed');
  }
  user.following.push(follow_id);
  await user.save();
  return res.send('User followed');
}

const unfollow = async (req, res) => {
  let {user_id, follow_id} = req.body;
  let user;
  try{
    user = await User.findById(user_id);
  }catch(e){
    console.log(e.message);
    return res.status(500).send('Internal Server Error');
  }
  if(!user.following.includes(follow_id)){
    return res.status(409).send('Not followed yet');
  }
  user.following.pull(follow_id);
  await user.save();
  return res.send('User unfollowed');
}

module.exports = { register, login, follow, unfollow };