import React, { useState, useEffect } from 'react';
import './styles.scss';
import Entrega from '../../Types/Entrega';
import { requestRegister } from '../../Actions/ServerActions';
import ModalAddress from '../EntradaEndereco';
import ModalError from '../../Components/ModalError';

export default function Registro(props: any) {
    const [nomeCliente, setNomeCliente] = useState<string>("");
    const [pontoPartida, setPontoPartida] = useState<string>("");
    const [pontoDestino, setPontoDestino] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [currentModal, setCurrentModal] = useState<number>(0);
    const [error, setError] = useState<string>("");

    function handleRegister() {
        if (nomeCliente != "" && pontoPartida != "" && pontoDestino != "") {
            let dataEntrega: number = new Date().getTime();
            let entrega: Entrega = {
                nomeCliente: nomeCliente,
                pontoPartida: pontoPartida,
                pontoDestino: pontoDestino,
                dataEntrega: dataEntrega
            };
            requestRegister(entrega)
                .then(result => {
                    props.history.push("/lista");
                })
                .catch(err => {
                    setError("Falha ao registrar entrega, tente novamente.");
                });
        } else {
            setError("Por favor, preencha todos os campos.");
        }
    }

    function handleDismiss(endereco: string) {
        console.log(endereco);
        if (currentModal == 0) setPontoPartida(endereco);
        else setPontoDestino(endereco);
        setModalVisible(false);
    }


    return (
        <>
            <ModalAddress onDismiss={() => setModalVisible(false)} onSave={(endereco: string) => { handleDismiss(endereco) }} visible={modalVisible}></ModalAddress>
            <ModalError error={error} onDismiss={() => setError("")} visible={error != "" ? true : false}></ModalError>
            <div className="register">
                <div className="title">Registro de Encomenda</div>
                <div className="inputs">
                    <input type="text" placeholder="Nome do Cliente" onChange={(e) => setNomeCliente(e.target.value)}></input>
                    <div className="row">
                        <div className="fake-input" onClick={() => { setModalVisible(true); setCurrentModal(0) }} >{pontoPartida || "Ponto de Partida"}</div>
                    </div>
                    <div className="row">
                        <div className="fake-input" onClick={() => { setModalVisible(true); setCurrentModal(1) }} >{pontoDestino || "Ponto de Destino"}</div>
                    </div>
                </div>
                <div className="button" onClick={() => handleRegister()}>Registrar</div>
            </div>
        </>
    )
}