// Node Dependencies
var express = require('express');
var router = express.Router();
// Import burger model
var burger = require('../models/burger.js');

// Create the routes
router.get('/', function(req, res) {
  console.log("hit root route")
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post('/api/burgers', function(req, res) {
    console.log("We hit the /api/burgers route")
    burger.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      // res.redirect('/');
      res.json(true);
    });
  });
  

module.exports = router;