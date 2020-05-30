import React from 'react';
import './styles.scss';
import Toolbar from '../../Components/Toolbar';
export default function Registro() {

    
    return (
        <div>
            <Toolbar/>
            <div className="register">
                <div className="title">Registro de Encomenda</div>
                <div className="inputs">
                    <input type="text" placeholder="Nome do Cliente"></input>
                    <input type="text" placeholder="Ponto de Partida"></input>
                    <input type="text" placeholder="Ponto de Destino"></input>
                </div>
                <div className="button">Registrar</div>
            </div>
        </div>
    )
}