const express = require('express');
const mongoose = require('mongoose');
const Schema = require("./schema");
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/nbaTeams');

app.get('/', function (req, res) {
  res.send('Welcome!')
});

app.get('/teams', async (req, res)=>{
  let response = await Schema.find({})
  console.log(response);
  return res.status(200).json(response);
});

app.listen(port, ()=> console.log("Server started"));
