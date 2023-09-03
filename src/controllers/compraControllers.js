const CompraModel = require('../models/compraModel');
const ProductModel = require('../models/productModel');
const ClienteModel = require('../models/clienteModel');


module.exports = {
    realizarCompra: async (req, res) => {
        try {
            // Coleta os detalhes da compra do corpo da requisição
            const { clienteId, produtoId, data } = req.body;

            // Encontra o cliente com base no ID
            const cliente = await ClienteModel.findById(clienteId);

            if (!cliente) {
                return res.status(404).json({ message: "Cliente não encontrado." });
            }

            // Encontra o produto com base no ID
            const produto = await ProductModel.findById(produtoId);

            if (!produto) {
                return res.status(404).json({ message: "Produto não encontrado." });
            }

            // Associe as categorias do produto às categorias preferidas do cliente
            cliente


            await CompraModel.create({
                produto: produtoId,
                data: data,
                cliente: clienteId
            });


            await cliente.save();

            res.status(200).json({ message: "Compra realizada com sucesso." });
        } catch (err) {
            res.status(500).json({ message: "Não foi possível realizar a compra." });
        }
    }
};
