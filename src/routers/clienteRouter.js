'use strict'
const express = require('express');
const clienteRouter = express.Router()
const clienteControllers = require('../controllers/clienteControllers')
const app = express();

app.use(express.json());



clienteRouter.route('/api/register')
    .post((req, res) => {
        clienteControllers.createCliente(req, res);
    })




clienteRouter.route('/api/clientes')
    .get((req, res) => {
        clienteControllers.getClientes(req, res);
    })



clienteRouter.route('/api/cliente/:id')

    .put((req, res) => {
        clienteControllers.updateCliente(req, res);
    })
    .delete((req, res) => {
        clienteControllers.deleteClienteById(req, res);

    });



module.exports = clienteRouter;
