const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    // Campos específicos para funcionários
    identificador: { type: String, required: true, unique: true }
});

const FuncionarioModel = UserModel.discriminator('Funcionario', funcionarioSchema);

module.exports = {
    FuncionarioModel
};
