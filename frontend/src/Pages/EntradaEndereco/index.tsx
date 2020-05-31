import React, { useState } from 'react';
import './styles.scss';
import Endereco from '../../Types/Endereco';
import { requestEndereco } from '../../Actions/ServerActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModalError from '../../Components/ModalError';
import { enderecoToString } from '../../Actions/Formatter';

export default function EntradaEndereco(props: any) {
    const [error, setError] = useState<string>("");
    const [cep, setCep] = useState<number>(0);
    const [numero, setNumero] = useState<number>(0);
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    function handleSave() {
        if (cep != 0 && numero != 0 && cidade != "" && estado != "" && bairro != "" && rua != "") {
            let endereco: Endereco = {
                cep: cep,
                numero: numero,
                cidade: cidade,
                estado: estado,
                bairro: bairro,
                rua: rua
            }
            props.onSave(enderecoToString(endereco));
        } else {
            setError("Por favor, preencha todos os campos.");
        }
    }

    function getEndereco() {
        setLoading(true);
        requestEndereco(cep)
            .then((endereco: Endereco) => {
                setLoading(false)
                setCidade(endereco.cidade as string);
                setEstado(endereco.estado as string);
                setBairro(endereco.bairro as string);
                setRua(endereco.rua as string);
            })
            .catch((err: any) => {
                setLoading(false);
                setError("Falha ao receber endereço");
            })
    }



    return (
        <>
            {props.visible ?
                <>
                    <ModalError error={error} onDismiss={() => setError("")} visible={error != "" ? true : false}></ModalError>
                    <div className="modal-address">
                        <div className="inputs">
                            <div className="row">
                                <input type="number" placeholder="CEP" onChange={(e: any) => setCep(e.target.value)} value={cep != 0 ? cep : undefined}></input>
                                <div className="icon" onClick={() => getEndereco()}><FontAwesomeIcon icon={faSearch} /></div>
                            </div>
                            <input type="text" placeholder="Cidade" onChange={(e: any) => setCidade(e.target.value)} value={cidade}></input>
                            <input type="text" placeholder="Estado" onChange={(e: any) => setEstado(e.target.value)} value={estado}></input>
                            <input type="text" placeholder="Bairro" onChange={(e: any) => setBairro(e.target.value)} value={bairro} ></input>
                            <input type="text" placeholder="Rua" onChange={(e: any) => setRua(e.target.value)} value={rua}></input>
                            <input type="number" placeholder="Numero" onChange={(e: any) => setNumero(e.target.value)} value={numero != 0 ? numero : undefined}></input>
                        </div>
                        <div onClick={() => loading ? null : handleSave()} className="button">{loading ? "Carregando..." : "Salvar"}</div>
                    </div>
                    <div className="modal-background" onClick={props.onDismiss}></div>
                </>
                :
                null}
        </>
    )
}