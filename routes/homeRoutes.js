const router = require('express').Router();
const apppointmentController = require('../controllers/appointmentController');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get('/', );
router.get('/appointment', withAuth);

module.exports = router;