const express = require('express')
const router = express.Router()

const {
    loginAsCustomer,
    clientReq,
    getClientData
} = require('../../controllers/clientController/customerController')

const clientMiddleware = require('../../middlewares/customerMiddleware')

router.post('/login',loginAsCustomer)
router.post('/request',clientReq)
router.use(clientMiddleware)
router.get('/get-client-data',getClientData)

module.exports = router