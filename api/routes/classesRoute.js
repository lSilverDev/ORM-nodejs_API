const { Router } = require("express");
const ClassesController = require('../controllers/ClassesController.js')

const router = Router();

router.get('/classes', ClassesController.getAllClasses);
router.get('/classes/:id', ClassesController.getClassesById);
router.post('/classes', ClassesController.createClasses);
router.post('/classes/:id', ClassesController.updateClasses);
router.delete('/classes/:id', ClassesController.deleteClasses);

module.exports = router;