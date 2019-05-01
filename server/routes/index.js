const router = require('express').Router()
const controller = require('./controller')

router.post('/save', controller.save)
router.get('/load', controller.load)
router.get('/filter', controller.filter)

module.exports = router
