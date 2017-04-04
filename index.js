var express = require('express');
var app = express();
var name = 'Hilal';

const users = [

{id:0, firstname:'Michel'},

{id:1, firstname:'Osman'},

{id:2, firstname:'Tandi'},

{id:4, firstname:'Daniel'},

{id:5, firstname:'Faustino'},

{id:6, firstname:'Ijacques'},

{id:7, firstname:'Paul'},

{id:8, firstname:'Jojo'}
]

  app.get('/',function (req, res) {
  res.send('Home page');
})

  app.get('/users/:name', function (req, res) {
  res.send('le nom de l\'utilisateur est', (req.params.name));
  });

  app.get('/:users', function (req, res) {
  res.send(req.params.name);
  });

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
