const { Router } = require("express");
const PeopleController = require('../controllers/PeopleController.js')

const router = Router();

router.get('/people', PeopleController.getAllPeople);
router.get('/people/:id', PeopleController.getPeopleById);
router.get('/people/:studentId/enrollment/:enrollmentId', PeopleController.getEnrollmentsById);
router.post('/people', PeopleController.createPeople);
router.post('/people/:id', PeopleController.updatePeople);
router.post('/people/:studentid/enrollment', PeopleController.createEnrollment);
router.post('/people/enrollment/:enrollmentId', PeopleController.updateEnrollment);
router.delete('/people/:id', PeopleController.deletePeople);
router.delete('/people/:studentid/enrollment/:enrollmentId', PeopleController.deleteEnrollment);

module.exports = router;