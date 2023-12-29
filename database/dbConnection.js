import mongoose from "mongoose";

export let dbConnection =()=> {
    mongoose.connect('mongodb+srv://crud12:1I4sIDAcNOPPk5sn@cluster0.h7uidom.mongodb.net/all-data?retryWrites=true&w=majority')
    .then(() => { console.log('Database Connected ') })
    .catch((err) => console.log("Erorr ..."))
}