const router = require('express').Router();
const { Appointment } = require('../models');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get("/", async (req, res) => {
    try {
        const booking = await Appointment.findAll({
            include: [
                {
                    model: Appointment
                }
            ]
        })
        res.render('main')
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});
        

module.exports = router;