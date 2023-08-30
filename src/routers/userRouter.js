'use strict'
const express = require('express');
const userRouter = express.Router()
const userControllers = require('../controllers/userControllers')
const app = express();
const port = process.env.port || 3000

app.use(express.json());



userRouter.route('/api/registro')
    .post((req, res) => {
        userControllers.createUser(req, res);
    })


userRouter.route('/api/login')
    .post((req, res) => {
        userControllers.authenticUser(req, res);
    })



userRouter.route('/api/user')
    .get((req, res) => {
        userControllers.getUser(req, res);
    })


userRouter.route('/api/user/:id')
    .get((req, res) => {
        userControllers.deleteUser
    })
    .put((req, res) => {
        userControllers.updateUser
    });

module.exports = userRouter;


// app.get/put/delete etc..