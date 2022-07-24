var express = require('express');
var router = express.Router();
var cont = require("../controller/controller.js");

router.get('/',cont.main)
router.get('/commands',cont.commands)
router.post('/dblwebhook',cont.reward)


module.exports = router
