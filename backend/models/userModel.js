//doctor ka details
import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        name: {type:String,required:true},
        email:{type: String, required:true,unique:true},
        password: {type: String, required:true},
        image: {type:String,default:"have to add"},
        address: {type:Object, default:{line1:'', line2:''}},
        gender: {type: String, default:"Not Selected"},
        dob:{type:String,default:"Not Selected"},
        phone: {type:String,default:'000000000'},
    })

    const doctorModel = mongoose.models.doctor || mongoose.model('doctor',doctorSchema)
export default doctorModel


