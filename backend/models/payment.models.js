const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const paymentSchema= new Schema({
    price: {type: Number , required: true, unique: false, },
    method: {type: String, required: true,unique:false },
    address: {type:String, required: true, unique:false},
    cardNumber: {type:Number, required:false, unique:true},
},{
    timestamps: true,
});
const user= mongoose.model('payment',paymentSchema);
module.exports=user
