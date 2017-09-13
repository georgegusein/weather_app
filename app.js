const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cities = require('./routes/cities');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api',cities);

app.listen(port,(err)=>{
if(err) throw err;
console.log('Connected to '+port);
});