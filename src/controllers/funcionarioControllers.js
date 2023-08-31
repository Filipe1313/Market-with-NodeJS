const FuncionarioModel = require('../models/funcionarioModel')
const ProductModel = require('../models/productModel')

module.exports = {
    getFuncionario: (req, res) => {
        FuncionarioModel.find({}).then((result) => {
            res.status(200).json(result);
        }).catch(() => {
            res.status(500).json({ message: "Não Foi possivel recuperar os Funcionarios." })
        })
    },
    createFuncionario: (req, res) => {
        FuncionarioModel.create(req.body).then((result) => {
            res.status(200).json(result)


        }).catch((err) => {
            res.status(500).json({ message: "Não Foi possivel criar o Funcionario." })
            console.log(err)
        })
    },

    // deletar Funcionario
    deleteFuncionarioById: async (req, res) => {
        try {
            console.log(req.params)
            const result = await FuncionarioModel.FindByIdAndDelete({ _id: req.params.id });
            res.status(200).send({ message: "funcionario removido com sucesso" });
        } catch (err) {
            res
                .status(500)
                .json({ message: "Não foi possivel remover o funcionario." });
        }
    },

    // ADICIONADO REMOTAMENTE POR MIGUELZIN, TESTAR ANTES DE VALIDAR:
    updateFuncionario: async (req, res) => {
        try {
            const resultado = await FuncionarioModel.updateOne(
                { cpf: req.body.cpf },
                req.body
            );
            res.status(200).send({ message: "funcionario atualizado no sistema" });
        } catch (err) {
            res.status(500).json({ message: "Não foi possivel atualizar os dados" });
        }
    },



    authenticFuncionario: (req, res) => {
        //Funcionario.find


    },



    // PENDENTE: Realizar uma atualização dos produtos de acordo com sua categoria.
    updateProducts: async (req, res) => {
        //Atualiza os dados do produto selecionado.
        try {
            const result = await ProductModel.updateMany({ categoria: req.body.categoria }, req.body)
            res.status(200).send({ message: "Produto atualizado com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possivel atualizar os dados deste produto." })
        }
    }

}