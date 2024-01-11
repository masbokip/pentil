const axios = require('axios');
require('dotenv').config();

const searchGame = async(req, res)=>{
  if (!req.query.q) return res.status(400).send('Bad Request');

  let data = `search "${req.query.q}";\r\nfields checksum,created_at,name,slug,updated_at,url;\r\n`;

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.igdb.com/v4/games',
    headers: { 
      'Authorization': process.env.AUTHORIZATION, 
      'Client-ID': process.env.CLIENT_ID, 
      'Content-Type': 'text/plain'
    },
    data : data
  };

  const result = await axios.request(config);
  console.log(result.data);
  return res.send(result.data);
}

const getCover = async (req, res)=>{
  if (!req.query.id) return res.status(400).send('Bad Request');
  let data = `fields *; where game=${req.query.id};`;

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.igdb.com/v4/covers',
    headers: { 
      'Authorization': process.env.AUTHORIZATION, 
      'Client-ID': process.env.CLIENT_ID, 
      'Content-Type': 'text/plain'
    },
    data : data
  };

  const result = await axios.request(config);
  console.log(result.data);
  return res.send(result.data);
}

module.exports = { searchGame, getCover };