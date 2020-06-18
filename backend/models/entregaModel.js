const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const entregaSchema = new Schema(
    {
        nomeCliente: {
            type: String
        },
        dataEntrega: {
            type: Number
        },
        pontoPartida: {
            type: String
        },
        pontoDestino: {
            type: String
        }
    },{timestamps:true},{collection:'entregas'}
);

let Entrega = mongoose.model("Entrega", entregaSchema);
module.exports = Entrega;
