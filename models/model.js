const mongoose            = require('mongoose');
const Schema              = mongoose.Schema;

const dataSchema = new Schema({
    StudentName : {
        type: String,
        required: true
    },
    FatherName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
       // required: true,
        min : 10
    },
    Address : {
        type: String
    },
    State: {
        type: String
    },
    city: {
        type: String
    },
    Pin: {
        type: Number,
        length : 6
    },
    PhoneNumber: {
        type: String,
        required: true,
        max :10 
    },
    Email: {
        type: String,
        required: true,
        unique : true
    },
    class :{
        type: Number,
        required: true,
        min :5,
        max:10
    },
    Marks: {
        type: Number
    },
    Date: {
        type: Date,
        default : Date.now
    },
    page: {
        type: Number
    },
    size: {
        type: Number
    },
},
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

dataSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("problem", dataSchema);