const express = require('express')
const ExperienceCtrl = require('../controllers/experience-ctrl')
const router = express.Router()

router.get('/experience', ExperienceCtrl.getExperiences)

module.exports = router
