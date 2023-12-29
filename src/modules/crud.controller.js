import myModel from "../../database/models/crud.model.js"

let addProduce = async (req, res) => {
    const { name, price, desc } = req.body
    await myModel.insertMany({ name, price, discription:desc })
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
    getAllProduce

}