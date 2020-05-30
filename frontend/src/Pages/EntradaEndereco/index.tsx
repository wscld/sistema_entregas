import React, { useState } from 'react';
import './styles.scss';
import Endereco from '../../Types/Endereco';
import { requestEndereco } from '../../Actions/ServerActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModalError from '../../Components/ModalError';

export default function EntradaEndereco(props: any) {
    const [error, setError] = useState<string>("");
    const [cep, setCep] = useState<number>(0);
    const [numero, setNumero] = useState<number>(0);
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [rua, setRua] = useState<string>("");

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
        requestEndereco(cep)
            .then((endereco: Endereco) => {
                setCidade(endereco.cidade as string);
                setEstado(endereco.estado as string);
                setBairro(endereco.bairro as string);
                setRua(endereco.rua as string);
            })
            .catch((err: any) => {
                setError("Falha ao receber endereço");
            })
    }

    function enderecoToString(endereco: Endereco) {
        if (endereco) return endereco.rua + ", " + endereco.numero + ", " + endereco.bairro + ", " + endereco.cidade + ", " + endereco.estado;
        else return undefined;
    }



    return (
        <>
            {props.visible ?
                <>
                    <ModalError error={error} onDismiss={() => setError("")} visible={error != "" ? true : false}></ModalError>
                    <div className="modal-address">
                        <div className="inputs">
                            <div className="row">
                                <input type="text" placeholder="CEP" onChange={(e: any) => setCep(e.target.value)} value={cep != 0 ? cep : undefined}></input>
                                <div className="icon" onClick={() => getEndereco()}><FontAwesomeIcon icon={faSearch} /></div>
                            </div>
                            <input type="text" placeholder="Cidade" onChange={(e: any) => setCidade(e.target.value)} value={cidade}></input>
                            <input type="text" placeholder="Estado" onChange={(e: any) => setEstado(e.target.value)} value={estado}></input>
                            <input type="text" placeholder="Bairro" onChange={(e: any) => setBairro(e.target.value)} value={bairro} ></input>
                            <input type="text" placeholder="Rua" onChange={(e: any) => setRua(e.target.value)} value={rua}></input>
                            <input type="text" placeholder="Numero" onChange={(e: any) => setNumero(e.target.value)} value={numero != 0 ? numero : undefined}></input>
                        </div>
                        <div onClick={() => handleSave()} className="button">Salvar</div>
                    </div>
                    <div className="modal-background" onClick={props.onDismiss}></div>
                </>
                :
                null}
        </>
    )
}