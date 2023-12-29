import auth from "../../database/models/auth.model.js";
import myModel from "../../database/models/crud.model.js"
import bcrypt from "bcrypt";

let register = async (req, res) => {
    const { name, email, password } = req.body

    let user = await auth.findOne({ email })

    if (user) {
        res.json({ message: " Email Already Exist " })
    } else {

        bcrypt.hash(password, 8, async function (err, hash) {

            await auth.insertMany({ name, email, password: hash })
            res.json({ message: "success" })
        });
    }
}

let login = async (req, res) => {
    const { email, password } = req.body
    let user = await auth.findOne({ email })
    if(user){
        const match = await bcrypt.compare(password, user.password);
        if(match){
            res.json({message:"login"})
        }else{
            res.json({message:" Password Not Valid "})
        }
    }else{
        res.json({message:" Email Not Valid "})
    }
   
}

let addProduce = async (req, res) => {
    const { name, price, desc } = req.body
    await myModel.insertMany({ name, price, discription: desc })
    res.json({ mes: "success" })
}

let getAllProduce = async (req, res) => {
    let data = await myModel.find()
    res.json({ mes: "success", data })
}

let DeleteProduce = async (req, res) => {
    const { _id } = req.params
    await myModel.findByIdAndDelete({ _id })
    res.json({ mes: "success" })
}

let updateProduce = async (req, res) => {
    const { name, price, discription, _id } = req.body
    let data = await myModel.findByIdAndUpdate({ _id }, { name, price, discription }, { new: true })
    res.json({ mes: "success", data })
}







export {
    addProduce,
    updateProduce,
    DeleteProduce,
    getAllProduce,
    register,
    login

}