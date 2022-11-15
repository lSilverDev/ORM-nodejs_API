const { Router } = require("express");
const LevelsController = require('../controllers/LevelsController.js')

const router = Router();

router.get('/levels', LevelsController.getAllLevels);

module.exports = router;