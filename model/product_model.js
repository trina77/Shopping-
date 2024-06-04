import mongoose, { model } from "mongoose";

const productschema = new mongoose.Schema({
    name:{type:String}, 
    image:{type: String},
    quantity: {type: Number},
    price: {type: Number}
})

const Product=mongoose.models.products||mongoose.model('products', productschema)

export default Product