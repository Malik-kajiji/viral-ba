const virusModel = require('../../models/virus')
const reqModel = require('../../models/requests')
const JWT = require('jsonwebtoken');

const createToken =  (_id)=>{
    return JWT.sign({_id},process.env.SECRET,{expiresIn:'30d'})
}

const loginAsVirus = async (req,res) => {
    const { name,password } = req.body
    try {
        const { _id,jobTitle,workingSince,virusImageUrl,workPeriods } = await virusModel.login(name,password)
        const token = createToken(_id)
        res.status(200).json({
            name,
            jobTitle,
            workingSince,
            virusImageUrl,
            workPeriods,
            token
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const virusReq = async (req,res) => {
    const { name,password,phoneNumber,notes,jobTitle } = req.body
    try {
        const request = await reqModel.createVirusRequest(name,password,phoneNumber,notes,jobTitle)
        res.status(200).json({
            request
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const getVirusData = async (req,res) => {
    const { name,jobTitle,workingSince,virusImageUrl,workPeriods } = req.virus

    res.status(200).json({name,jobTitle,workingSince,virusImageUrl,workPeriods})
}

const removeAcc = async (req,res) => {
    const { _id } = req.virus

    try {
        const user = await virusModel.updateIsLocked(_id,true)
        res.status(200).json({
            user
        })
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

module.exports = {
    loginAsVirus,
    virusReq,
    getVirusData,
    removeAcc
}