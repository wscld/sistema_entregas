import Entrega from "../Types/Entrega";
import ServerError from "../Types/ServerError";
import { resolve } from "dns";
import Endereco from "../Types/Endereco";

const axios = require("axios").default;

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


/**
 * Pede endereço a uma api externa
 * Caso sucesso recebe objeto e converte para :Endereco
 * Caso erro recebe mensagem de erro :any
 * @param cep 
 */
export const requestEndereco = (cep: number) => {
    return new Promise<Endereco>((resolve, reject) => {
        axios({
            method: 'get',
            url: "https://viacep.com.br/ws/" + cep + "/json/",
            responseType: 'json'
        }).then((response: any) => {
            let data: any = response.data;
            let endereco: Endereco = {
                cep: cep,
                rua: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                estado: data.uf
            }
            console.log(endereco)
            resolve(endereco);
        }).catch((err: any) => {
            reject(err);
        });
    });
}


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
export const requestItem = (id: string) => {
    return new Promise<Entrega>((resolve, reject) => {
        axios({
            method: 'post',
            url: SERVER_URL + '/api/item',
            data: {
                id: id
            }
        }).then((response: any) => {
            let data: any = response.data;
            if (!data.error) {
                resolve(data);
            } else {
                reject(data.error);
            }
        }).catch((err: any) => {
            let data: ServerError = err.data;
            reject(data);
        });
    });
}