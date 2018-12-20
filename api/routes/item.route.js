

const express = require('express');
const app = express();
const itemsRoutes = express.Router();

// Require Business model in our routes module
let Item = require('../models/item');

// Defined store route
itemsRoutes.route('/add').post(function (req, res) {
  let item = new Item(req.body);
  item.save()
    .then(item => {
      res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
itemsRoutes.route('/').get(function (req, res) {
    Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Defined edit route
itemsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});

//  Defined update route
itemsRoutes.route('/update/:id').post(function (req, res) {
    Item.findById(req.params.id, function(err, next, item) {
    if (!item)
      return next(new Error('Could not load items'));
    else {
        item.name = req.body.name;
        item.description = req.body.description;
        item.importance = req.body.importance;

        item.save().then(item => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemsRoutes.route('/delete/:id').get(function (req, res) {
    Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = itemsRoutes;