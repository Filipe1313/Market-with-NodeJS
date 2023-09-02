const express = require('express');
const compraRouter = express.Router();
const productControllers = require('../controllers/compraControllers');
const compraControllers = require('../controllers/compraControllers');
const app = express();

app.use(express.json());

compraRouter.route('/api/compras')
    .post((req, res) => {
        compraControllers.comprarProduto(req, res);
    })

module.exports = compraRouter;