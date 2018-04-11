const express = require('express')
var router = express.Router();
module.exports = router;
console.log('i am here');
router.get('/', function (req, res, next) {
    res.send('Node Server Running...')
  })

router.get('/users/checkOnCreate', function (req, res, next) {
    console.log(req.query.uname);
    if(req.query.uname=="suresh.negi89@gmail.com")
    res.send({ok:false})
    else
    res.send({ok:true})
})
