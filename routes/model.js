const express = require('express')
const router = express.Router()
const problem = require('../models/model')
const validator = require('../validators/validator');
 const controller =require('../controllers/controller');
router.post('/student',validator.studentValidate, controller.create);
router.post('/student', controller.create);
router.get('/student', controller.get);
router.put('/student/:id', controller.update);

module.exports = router;