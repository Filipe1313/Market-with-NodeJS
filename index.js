// Imports

require('dotenv').config()

// Credenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const ports = process.env.PORT;

// Definindo porta.
const port = process.env.port || ports

const mongoose = require('mongoose')

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPass}@marketdatabase.gtds4qm.mongodb.net/`
    ).then(() => {
        app.listen(3000)
        console.log('Conectou com o banco!')
    }).catch((err) => console.log(err))


// Import express
const express = require('express')

// Atribuindo express a nossa variável app.
const app = express()


// Passando o roteador do usuario.
const productRouter = require('./src/routers/productRouter');
const clienteRouter = require('./src/routers/clienteRouter');




app.use(express.json());

//Router do usuario.
app.use(clienteRouter);
app.use(productRouter);


