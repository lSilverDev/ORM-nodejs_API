const { Router } = require("express");
const LevelsController = require('../controllers/LevelsController.js')

const router = Router();

router.get('/levels', LevelsController.getAllLevels);
router.get('/levels/:id', LevelsController.getLevelsById);
router.post('/levels', LevelsController.createLevels);
router.post('/levels/:id', LevelsController.updateLevels);
router.delete('/levels/:id', LevelsController.deleteLevels);

module.exports = router;