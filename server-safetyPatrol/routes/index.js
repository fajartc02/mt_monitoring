var express = require('express');
var router = express.Router();
const patrolCheck = require('./patrolCheck')

router.use('/patrolCheck', patrolCheck)

/* GET home page. */
router.get('/', function(req, res, next) {
  
});

module.exports = router;
