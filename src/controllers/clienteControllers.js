const ClienteModel = require('../models/clienteModel')

module.exports = {
    getUser: (req, res) => {
        ClienteModel.find({}).then((result) => {
            res.status(200).json(result);
        }).catch(() => {
            res.status(500).json({ message: "Não foi possivel recuperar os clientes." })
        })
    },
    createUser: (req, res) => {
        ClienteModel.create(req.body).then((result) => {
            res.status(200).json(result)


        }).catch((err) => {
            res.status(500).json({ message: "Não foi possivel criar o cliente." })
            console.log(err)
        })
    },

    // deletar usuario
    deleteUserById: async (req, res) => {
        try {
            
            const result = await ClienteModel.findByIdAndDelete({ _id: req.params.id });
            res.status(200).send({ message: "cliente removido com sucesso" });
        } catch (err) {
            res
                .status(500)
                .json({ message: "Não foi possivel remover o cliente." });
        }
    },

    // ADICIONADO REMOTAMENTE POR MIGUELZIN, TESTAR ANTES DE VALIDAR:
    updateUser: async (req, res) => {
        try {
            const resultado = await ClienteModel.updateOne(
                { cpf: req.body.cpf },
                req.body
            );
            res.status(200).send({ message: "cliente atualizado no sistema" });
        } catch (err) {
            res.status(500).json({ message: "Não foi possivel atualizar os dados" });
        }
    },



    authenticUser: (req, res) => {
        //User.find


    },

}