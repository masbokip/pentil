const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const router = require('./routes/main.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => res.send('API is up!'));

app.use('/api', router);


app.listen(port, () => {
  try{
    mongoose.connect(process.env.MONGODB_URI);
  }
  catch(e){
    console.log(e.message);
  }
  console.log(`Example app listening on port ${port}!`);
});