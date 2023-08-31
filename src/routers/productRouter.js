const express = require('express');
const productRouter = express.Router();
const productControllers = require('../controllers/productControllers')
const app = express();
const port = process.env.port || 3000

app.use(express.json());

productRouter.route('/api/produtos')
    .get((req, res) => {
        // Pegar todos produtos
        productControllers.getProdutos(req, res);
    })
    .post((req, res) => {
        // Criar um novo produto.
        productControllers.createProduct(req, res)
    })






productRouter.route('/api/produtos/:id')
    .get((req, res) => {
        productControllers.getProduct(req, res)
        // pegar produto especifico
    })
    .put((req, res) => {
        // Atualizar um produto.
        productControllers.updateProduct(req, res);
    });



module.exports = productRouter;


