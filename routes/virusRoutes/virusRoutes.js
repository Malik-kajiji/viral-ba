const express = require('express')
const router = express.Router()
const {
    loginAsVirus,
    virusReq,
    getVirusData,
    removeAcc
} = require('../../controllers/virusControllers/virusController')

const virusMiddleware = require('../../middlewares/virusMiddleware')

router.post('/login',loginAsVirus)
router.post('/request',virusReq)
router.use(virusMiddleware)
router.get('/get-virus-data',getVirusData)
router.get('/remove',removeAcc)


module.exports = router