import mongoose from "mongoose";

let mySchema =  mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

 let auth = mongoose.model('auth',mySchema)
 export default auth