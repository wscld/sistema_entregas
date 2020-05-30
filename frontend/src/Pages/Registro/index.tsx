import React, { useState } from 'react';
import './styles.scss';
import Toolbar from '../../Components/Toolbar';
import Entrega from '../../Types/Entrega';
import { requestRegister } from '../../Actions/ServerActions';
export default function Registro() {
    const [nomeCliente, setNomeCliente] = useState<String>("");
    const [pontoPartida, setPontoPartida] = useState<String>("");
    const [pontoDestino, setPontoDestino] = useState<String>("");


    function handleRegister() {
        let dataEntrega: Number = new Date().getDate();
        let entrega: Entrega = {
            nomeCliente: nomeCliente,
            pontoPartida: pontoPartida,
            pontoDestino: pontoDestino,
            dataEntrega: dataEntrega
        };
        requestRegister(entrega)
            .then(result => {
                console.log("success");
                console.log(result);
            })
            .catch(err => {
                console.log("error");
                console.log(err)
            });
    }

    return (
        <>
            <div className="register">
                <div className="title">Registro de Encomenda</div>
                <div className="inputs">
                    <input type="text" placeholder="Nome do Cliente" onChange={(e) => setNomeCliente(e.target.value)}></input>
                    <input type="text" placeholder="Ponto de Partida" onChange={(e) => setPontoPartida(e.target.value)}></input>
                    <input type="text" placeholder="Ponto de Destino" onChange={(e) => setPontoDestino(e.target.value)}></input>
                </div>
                <div className="button" onClick={() => handleRegister()}>Registrar</div>
            </div>
        </>
    )
}