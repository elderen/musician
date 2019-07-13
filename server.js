const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// API

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(cors());

// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}... ------>`)
})