const UserModel = require('../models/userModel')

module.exports = {
    getUser: (req, res) => {
        UserModel.find({}).then((result) => {
            res.status(200).json(result._doc);
        }).catch(() => {
            res.status(500).json({ message: "Não foi possivel recuperar os usuarios." })
        })
    },
    createUser: (req, res) => {
        UserModel.create(req.body).then((result) => {
            res.status(200).json(result)


        }).catch((err) => {
            res.status(500).json({ message: "Não foi possivel criar o Usuario." })
            console.log(err)
        })
    },
    deleteUser: (req, res) => {

    },
    updateUser: (req, res) => {
        

    },

    authenticUser: (req, res) => {
        User.find

        
    },

}