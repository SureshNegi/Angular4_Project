const express = require('express')
var router = express.Router();
module.exports = router;
console.log('i am here');
router.get('/', function (req, res, next) {
    res.send('Node Server Running...')
  })

router.get('/users/checkOnCreate', function (req, res, next) {
    console.log(req.query.uname);
    res.send({ok:false})
})
