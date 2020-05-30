import Entrega from "../Types/Entrega";
import ServerError from "../Types/ServerError";

const axios = require("axios").default;

const SERVER_URL = "http://localhost:8081";


/**
 * Envia objeto entrega  :Entrega.
 * Caso sucesso recebe objeto entrega de volta :Entrega.
 * Caso erro recebe mensagem de erro :ServerError.
 * @param entrega 
 */
export const requestRegister = (entrega: Entrega) => {
    return new Promise<Entrega>((resolve, reject) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/api/register',
            data: {
                entrega: entrega
            }
        }).then((response: Entrega) => {
            resolve(response);
        }).catch((err: ServerError) => {
            reject(err);
        });
    });
}

/**
 * Pede uma lista de entregas.
 * Caso sucesso recebe array com entregas :Entrega[].
 * Caso erro recebe mensagem de erro :ServerError.
 */
export const requestList = () => {
    return new Promise<Entrega[]>((resolve, reject) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/api/list',
        }).then((response: Array<Entrega>) => {
            resolve(response);
        }).catch((err: ServerError) => {
            reject(err);
        });
    });
}


/**
 * Pede item especifico com id :String.
 * Caso sucesso recebe item completo :Entrega.
 * Caso erro recebe mensage de erro :ServerError.
 * @param id
 */
export const requestItem = (id: String) => {
    return new Promise<Entrega>((resolve, reject) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/api/item',
            data: {
                id: id
            }
        }).then((response: Entrega) => {
            resolve(response);
        }).catch((err: ServerError) => {
            reject(err);
        });
    });
}