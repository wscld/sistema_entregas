const path = require('path');
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Entrega = require("./Schemas/Entrega");
const app = express();

//config
mongoose.connect('mongodb://127.0.0.1:27017/sisentregas', { useNewUrlParser: true });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());



/**
 * Registro de entregas.
 * Recebe nomeCliente,dataEntrega,pontoPartida e pontoDestino.
 * Caso registrado retorna objeto entrega.
 * Caso erro retorna mensagem com detalhes.
 */
app.post("/api/register", (req, res) => {
    const reqEntrega = req.body.entrega;
    if (reqEntrega) {
        let entrega = new Entrega({
            nomeCliente: reqEntrega.nomeCliente,
            dataEntrega: reqEntrega.dataEntrega,
            pontoPartida: reqEntrega.pontoPartida,
            pontoDestino: reqEntrega.pontoDestino
        });
        entrega.save((err, result) => {
            if (!err) res.send(result)
            else res.send({ error: err });
        });
    } else {
        res.send({ error: "entrada invalida" })
    }
});



/**
 * Lista todas as entregas.
 * Não recebe nada.
 * Retorna array com todas as entregas registradas.
 */
app.post("/api/list", (req, res) => {
    Entrega.find({}, (err, result) => {
        if (!err) res.send(result)
        else res.send({ error: err });
    });
});




/**
 * Exibe detalhes.
 * Recebe id de entrega.
 * Caso item exista retorna objeto entrega.
 * Caso item não exista retorna mensagem com detalhes
 */
app.post("/api/item", (req, res) => {
    const id = req.body.id;
    if (id) {
        Entrega.findById(id, (err, result) => {
            if (!err) res.send(result)
            else res.send({ error: err });
        });
    } else {
        res.send({ error: "entrada invalida" })
    }
});



app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));

module.exports = app;