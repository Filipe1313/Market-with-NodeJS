const mongoose = require('mongoose')
const Schema = mongoose.Schema


const clienteSchema = new Schema({
    nome: { type: String, required: true },
    idade: { type: String, required: true },
    cpf: { type: String, required: true, unique: true }
})

module.exports = mongoose.model("ClienteModel", clienteSchema);