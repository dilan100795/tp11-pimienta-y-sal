const {home,menu,detalle} = require('../controllers/indexController')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', home);
router.get('/menu', menu);
router.get('/detalle/:id', detalle);

module.exports = router;
