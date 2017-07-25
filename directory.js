const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function (req, res) {
  res.send('test')
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
