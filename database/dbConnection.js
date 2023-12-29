import mongoose from "mongoose";

export let dbConnection =()=> {
    mongoose.connect('mongodb://127.0.0.1:27017/Database_Crud')
    .then(() => { console.log('Database Connected ') })
    .catch((err) => console.log("Erorr ...", err))
}