import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/entregaRoutes';
const app = express();

//config
mongoose.connect('mongodb://127.0.0.1:27017/sisentregas', { useNewUrlParser: true });
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.use("/api", routes);


app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));

export default app;