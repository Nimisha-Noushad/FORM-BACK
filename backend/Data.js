const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/formapp');
const Schema=mongoose.Schema;

var DataSchema=new Schema({
    
    fullName:String,
    email:String,
    phoneNumber:Number,
    
})
module.exports(Data);