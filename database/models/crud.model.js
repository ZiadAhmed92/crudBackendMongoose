import mongoose from "mongoose";

let mySchema =  mongoose.Schema({
    name: String,
    price: Number,
    discription: String,
})

 let myModel = mongoose.model('crud',mySchema)
 export default myModel