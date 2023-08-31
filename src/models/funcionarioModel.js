const mongoose = require('mongoose')
const Schema = mongoose.Schema

const funcionarioSchema = new Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    identificador: { type: String, required: true, unique: true }

})

module.exports = mongoose.model("FuncionarioModel", funcionarioSchema);