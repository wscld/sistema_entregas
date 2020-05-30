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
        }).then((response: any) => {
            let data: Entrega = response.data;
            resolve(data);
        }).catch((err: any) => {
            let data: ServerError = err.data;
            reject(data);
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
        }).then((response: any) => {
            let data: Array<Entrega> = response.data;
            resolve(data);
        }).catch((err: any) => {
            let data: ServerError = err.data;
            reject(data);
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
        }).then((response: any) => {
            let data: Entrega = response.data;
            resolve(data);
        }).catch((err: any) => {
            let data: ServerError = err.data;
            reject(data);
        });
    });
}