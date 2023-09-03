const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    // Campos específicos para clientes
    categoriasPreferidas: [{ type: String }]
});

const ClienteModel = UserModel.discriminator('Cliente', clienteSchema);

module.exports = {
    ClienteModel
};
