import mongoose from "mongoose";

let mySchema =  mongoose.Schema({
    name: String,
    email: Number,
    password: String,
})

 let auth = mongoose.model('auth',mySchema)
 export default auth