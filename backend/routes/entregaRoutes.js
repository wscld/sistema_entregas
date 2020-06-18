import express from 'express'
import EntregaController from '../controllers/entregaController';
const routes = express.Router();

routes.post("/register", EntregaController.saveEntrega);
routes.get("/item", EntregaController.getEntrega);
routes.get("/list", EntregaController.getEntregas);

export default routes;