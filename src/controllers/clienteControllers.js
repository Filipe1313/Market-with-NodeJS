const UserModel = require('../models/userModel') // Importe o modelo User

module.exports = {
    // Recuperar todos os clientes
    getClientes: (req, res) => {
        UserModel.find({ type: 'cliente' }).then((result) => {
            res.status(200).json(result);
        })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar os clientes." });
            });
    },


    // Deletar cliente por ID
    deleteClienteById: async (req, res) => {
        try {
            await UserModel.findOneAndDelete({ _id: req.params.id, tipo: 'cliente' }); // Verifica o tipo
            res.status(200).send({ message: "Cliente removido com sucesso." });
        } catch (err) {
            res.status(500).json({ message: "Não foi possível remover o cliente." });
        }
    },

    // Atualizar cliente por CPF (ou outro campo único)
    updateCliente: async (req, res) => {
        try {
            await UserModel.findOneAndUpdate(
                { cpf: req.body.cpf, type: 'cliente' }, // Verifica o tipo e campo único
                req.body
            );
            res.status(200).send({ message: "Cliente atualizado no sistema." });
        } catch (err) {
            res.status(500).json({ message: "Não foi possível atualizar os dados do cliente." });
        }
    },

    // Outras funções específicas de clientes
};
