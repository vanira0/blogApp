const express = require('express');
const router = express.Router();


// @desc    Landing Page
// @route   GET /
router.get('/', (req,res) => {
    res.render('home')
})

// @desc  Dashboard
// @route GET /dashboard


module.exports = router;