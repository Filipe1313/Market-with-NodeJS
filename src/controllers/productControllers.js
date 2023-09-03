const ProductModel = require('../models/productModel');


module.exports = {
    getProdutos: (req, res) => {
        ProductModel.find({}).then((result) => {
            res.status(200).json(result);
        }).catch(() => {
            res.status(500).json({ message: "Ocorreu um erro !" })
        })
    },

    // Deletar produto pelo Codigo.
    deleteProductById: async (req, res) => {
        try {
            await ProductModel.deleteProductById({ _id: req.params.id })
            res.status(200).send({ message: "Produto deletado com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possivel remover o produto" })
        }
    },

    // Pegar produto especifico.
    getProduct: async (req, res) => {
        try {
            //Pega um unico produto pelo identificador que aqui é o código.
            const result = await ProductModel.findById({ codigo: req.body.codigo })
            res.status(200).send(result)
        } catch (err) {
            

            res.status(500).json({ message: "Não foi possivel recuperar o produto." })
        }
    },

    // Criar o produto
    createProduct: async (req, res) => {
        try {
            const result = await ProductModel.create(req.body)
            res.status(201).json({ message: `O produto ${result._doc.nome} foi criado com sucesso!` })
        } catch (error) {
            res.status(500).json({ message: `Não foi possivel criar o produto ${req.body.nome}` })
        }
    },

    // Atualizar o produto.
    updateProduct: async (req, res) => {
        //Atualiza os dados do produto selecionado.
        try {
            const result = await ProductModel.updateOne({ codigo: req.body.codigo }, req.body)
            res.status(200).send({ message: "Produto atualizado com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possivel atualizar os dados deste produto." })
        }
    }

}