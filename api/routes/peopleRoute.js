const { Router } = require("express");
const PeopleController = require('../controllers/PeopleController.js')

const router = Router();

router.get('/people', PeopleController.getAllPeople);
router.get('/people/:id', PeopleController.getPeopleById);
router.post('/people', PeopleController.createPeople);

module.exports = router;