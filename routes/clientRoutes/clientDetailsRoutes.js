const express = require('express')
const router = express.Router()
const clientMiddleware = require('../../middlewares/customerMiddleware')

const { getDetails, changePassword, removeAcc } = require('../../controllers/clientController/clientDetailsController')

router.use(clientMiddleware)

router.get('/get-client-details',getDetails)
router.put('/change-password',changePassword)
router.put('/remove-account',removeAcc)

module.exports = router