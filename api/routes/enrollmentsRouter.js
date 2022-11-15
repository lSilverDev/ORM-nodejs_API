const { Router } = require("express");
const EnrollmentsController = require('../controllers/EnrollmentsController.js')

const router = Router();

router.get('/enrollments', EnrollmentsController.getAllEnrollments);

module.exports = router;