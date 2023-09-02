const mongoose = require('mongoose')
const Schema = mongoose.Schema


const compraSchema = new Schema({
    
    produto: { type: Schema.Types.String, ref: 'productModel', required: true },
    data: { type: String, required: true },


})

module.exports = mongoose.model("compraModel", compraSchema)