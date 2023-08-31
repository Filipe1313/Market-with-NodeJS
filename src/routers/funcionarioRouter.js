'use strict'
const express = require('express');
const funcionarioRouter = express.Router()
const funcionarioControllers = require('../controllers/funcionarioControllers')
const app = express();
const port = process.env.port || 3000

app.use(express.json());



funcionarioRouter.route('/api/registrofuncionario')
    .post((req, res) => {
        funcionarioControllers.createFuncionario(req, res);
    })


funcionarioRouter.route('/api/loginfuncionario')
    .post((req, res) => {
        funcionarioControllers.authenticFuncionario(req, res);
    })



funcionarioRouter.route('/api/funcionario')
    .get((req, res) => {
        funcionarioControllers.getFuncionario(req, res);
    })
    .post((req, res) => {
        funcionarioControllers.updateProducts(req, res);
    })



funcionarioRouter.route('/api/funcionario/:id')

    .put((req, res) => {
        funcionarioControllers.updateFuncionario(req, res);
    })
    .delete((req, res) => {
        funcionarioControllers.deleteFuncionarioById(req, res);

    });



module.exports = funcionarioRouter;


// app.get/put/delete etc..