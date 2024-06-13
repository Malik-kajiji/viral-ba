const customerModel = require('../../models/customer')
const reqModel = require('../../models/requests')
const JWT = require('jsonwebtoken');

const createToken =  (_id)=>{
    return JWT.sign({_id},process.env.SECRET,{expiresIn:'90d'})
}

const loginAsCustomer = async (req,res) => {
    const { name,password } = req.body

    try {
        const {_id,businessType,clientSince,clientImageUrl } = await customerModel.login(name,password)
        const token = createToken(_id)
        res.status(200).json({
            name,
            businessType,
            clientSince,
            clientImageUrl,
            token
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const clientReq = async (req,res) => {
    const { name,password,phoneNumber,notes,businessType } = req.body

    try {
        const request = await reqModel.createClientRequest(name,password,phoneNumber,notes,businessType)
        res.status(200).json({
            request
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const getClientData = async (req,res) => {
    const { name,businessType,clientSince,clientImageUrl } = req.client

    res.status(200).json({name,businessType,clientSince,clientImageUrl})
}


module.exports = {
    loginAsCustomer,
    clientReq,
    getClientData
}