import 'babel-polyfill';
import Entrega from '../models/entregaModel';

export const find = async (params) => {
    try {
        return await Entrega.find(params).lean();
    } catch (err) {
        throw new Error(err)
    }
}

export const findOne = async (params) => {
    try {
        return await Entrega.findOne(params).lean();
    } catch (err) {
        throw new Error(err)
    }
}

export const store = async (data) => {
    try {
        return await Entrega.create(data).lean();
    } catch (err) {
        throw new Error(err)
    }
}

export default {find,findOne,store}