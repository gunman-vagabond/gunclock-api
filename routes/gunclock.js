var express = require('express');
var router = express.Router();

var Gunclock = require('../models/gunclock');

router.get('/', function(req, res, next) {
  console.log('get called.');
  Gunclock.find( function(err, gunclocks) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json( 
        { 
          message: 'Gunclock get Success.', 
          gunclocks: gunclocks 
        }
      );
    }
  });
});

router.get('/:id', function(req, res, next) {
  console.log('get ' + req.params.id + ' called.');
  Gunclock.findById(req.params.id, function(err, gunclock) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json( 
        { 
          message: 'Gunclock get Success.', 
          gunclock: gunclock 
        }
      );
    }
  });
});

router.post('/', function(req, res, next) {
  console.log('post called.');
  console.log(req);

  Gunclock.create(req.body, function(err, gunclock) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(
        { 
          message: 'Gunclock create Success.'
        }
      );
    }
  });
});

router.put('/:id', function(req, res, next) {
  console.log('put ' + req.params.id + ' called.');
  Gunclock.findById(req.params.id, function(err, gunclock) {
    if (err) {
      res.status(500).send(err);
    } else {
      gunclock.size = req.body.size; 
      gunclock.color = req.body.color; 
      gunclock.save( function(err, gunclock) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json( 
            { 
              message: 'Gunclock update Success.', 
              gunclock: gunclock 
            }
          );
        }
      });
    }
  });
});

router.delete('/:id', function(req, res, next) {
  console.log('delete ' + req.params.id + ' called.');
  Gunclock.findByIdAndRemove(req.params.id, function(err, gunclock) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json( 
        { 
          message: 'Gunclock delete Success.' 
        }
      );
    }
  });
});

module.exports = router;
