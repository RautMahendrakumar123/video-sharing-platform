const mongoose=require("mongoose")

const resisterSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     phone:{
        type:String,
        required:true
     },
     profession:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     confirmpassword:{
        type:String
     }
},
{
   timestamps:true
}
)

RegisterModel=mongoose.model("user",resisterSchema)

module.exports=RegisterModel