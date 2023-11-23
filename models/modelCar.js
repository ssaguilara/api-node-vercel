import mongoose from "mongoose";

const Schema = mongoose.Schema

const car = new Schema({
    platenumber:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    dailyvalue:{
        type:String,
        required: true
    },
    
})

export const modelCar = mongoose.model('cars', car)