import mongoose, { Schema } from "mongoose";

const Trabajos = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    date:{type:String,require:true},
    location:{type:String,require:true},
    jobs:{type:String,require:true},
    username: {type: String, required: true},
    role: {type: String, required: true},
    active: {type: Boolean, default: false},
    dateBirth: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false 
})

export default mongoose.model("trabajos",Trabajos )