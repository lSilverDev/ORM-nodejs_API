const { Router } = require("express");
const ClassesController = require('../controllers/ClassesController.js')

const router = Router();

router.get('/classes', ClassesController.getAllClasses);

module.exports = router;