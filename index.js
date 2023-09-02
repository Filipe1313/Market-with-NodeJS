// Imports

require('dotenv').config()
require('jsonwebtoken');

// Credenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const port = process.env.PORT;

// Import mongoose.
const mongoose = require('mongoose')

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPass}@marketdatabase.gtds4qm.mongodb.net/`
    ).then(() => {
        app.listen(port)
        console.log('Conectou com o banco!')
    }).catch((err) => console.log(err))


// Import express
const express = require('express')

// Atribuindo express a nossa variável app.
const app = express()
const jwt = jwtService("jsonwebtoken");


// Passando o roteador do usuario.
const productRouter = require('./src/routers/productRouter');
const clienteRouter = require('./src/routers/clienteRouter');
const funcionarioRouter = require('./src/routers/funcionarioRouter');
const compraRouter = require('./src/routers/compraRouter')



// Definindo o método de comunicação do expressen como JSON.
app.use(express.json());

//Routers
app.use(middlewareAuth);
app.use(clienteRouter);
app.use(productRouter);
app.use(funcionarioRouter);
app.use(compraRouter);


const clienteModel = require('./src/models/clienteModel');
const middlewareAuth = require('./src/middlewares/middlewareAuth');
app.get("/login", async (req, res) => {
    const result = await clienteModel.findOne({ cpf: req.body.cpf, password: req.body.password })
    if (!result) {
        res.status(401).json({ message: " Usuário não autorizado" })
        return next();
    } else {
        const secret = process.env.SECRET
        jwt.sign(req.body, secret, (err, token) => {
            if (err) {
                res.status(403).json({ message: "Não foi possivel se autenticar ao sistema" });
            }
            res.set("Access-Token", token);
            res.end();
        })
    }
})



