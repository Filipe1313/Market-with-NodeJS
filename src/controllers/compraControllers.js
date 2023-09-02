const compraModel = require('../models/compraModel')

module.exports = {
    comprarProduto: async (req, res) => {
        try {
            if (!req.body.produto || !req.body.data || !req.body.preco) {
                res.status(400).json({ message: "Está faltando algo para concluir sua compra" })
            }
            const result = compraModel.create(req.body).then(() => {
                res.status(200).json(result)
            })
        } catch (error) {
            res.status(500).json({ message: "Não foi possivel fazer sua compra" })
        }
    }
}