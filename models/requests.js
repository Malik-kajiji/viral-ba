const mongoose = require('mongoose');

const schema = mongoose.Schema

const requestSchema = new schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    type: {
        type:String,
        enum:['client','virus']
    },
    password: {
        type:String,
        required:true
    },
    phoneNumber: {
        type:String,
        required:true
    },
    notes: {
        type:String,
    },
    businessType: {
        type:String,
    },
    jobTitle: {
        type:String,
    },
})

requestSchema.statics.createVirusRequest = async function(name,password,phoneNumber,notes,jobTitle){
    const request = await this.create({name,type:'virus',password,phoneNumber,notes,jobTitle})

    return request
}

requestSchema.statics.createClientRequest = async function(name,password,phoneNumber,notes,businessType){
    const request = await this.create({name,type:'client',password,phoneNumber,notes,businessType})

    return request
}

requestSchema.statics.getVirusesRequests = async function(){
    const requests = await this.find({type:'virus'})

    return requests
}

requestSchema.statics.getClientsRequests = async function(){
    const requests = await this.find({type:'client'})

    return requests
}

requestSchema.statics.deleteRequest = async function(_id){
    const request = await this.findOneAndDelete({_id})

    return request
}

module.exports = mongoose.model('request',requestSchema)