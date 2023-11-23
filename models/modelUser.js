import mongoose from "mongoose";

const Schema = mongoose.Schema

const user = new Schema({
    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    reservworld:{
        type: String,
        required: true
    }
    
})

export const modelUser = mongoose.model('users', user)




