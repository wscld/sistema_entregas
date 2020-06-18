import EntregaService from '../services/entregaService';

export const getEntrega = async (req, res, next) => {
    const id = req.query.id;
    if (id) {
        try {
            res.send(await EntregaService.findOne({ _id: id }));
        } catch (err) {
            return res.status(400).json({ status: 400, error: err.message });
        }
    } else {
        return res.status(400).json({ status: 400, error: "invalid object" });
    }
}

export const getEntregas = async (req, res, next) => {
    try {
        res.send(await EntregaService.find({}));
    } catch (err) {
        return res.status(400).json({ status: 400, error: err.message });
    }
}

export const saveEntrega = async (req, res, next) => {
    const reqEntrega = req.body.entrega;
    if (reqEntrega) {
        try {
            let entrega = {
                nomeCliente: reqEntrega.nomeCliente,
                dataEntrega: reqEntrega.dataEntrega,
                pontoPartida: reqEntrega.pontoPartida,
                pontoDestino: reqEntrega.pontoDestino
            };
            return res.send(await EntregaService.store(entrega));
        } catch (err) {
            return res.status(400).json({ status: 400, error: err.message });
        }
    } else {
        return res.status(400).json({ status: 400, error: "invalid object" });
    }
}

export default { getEntrega, getEntregas, saveEntrega };