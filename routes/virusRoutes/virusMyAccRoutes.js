const express = require('express')
const router = express.Router()
const virusMiddleware = require('../../middlewares/virusMiddleware')

const { getDetails, changePassword , removeAcc } = require('../../controllers/virusControllers/virusMyAccController')

router.use(virusMiddleware)

router.get('/get-virus-details',getDetails)
router.put('/change-password',changePassword)
router.put('/remove-account',removeAcc)

module.exports = router