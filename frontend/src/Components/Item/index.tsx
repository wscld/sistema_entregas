import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faDotCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import { formatTime } from '../../Actions/Formatter';

export default function Item(props: any) {


    return (
        <>
            <div className="item">
                <div className="title">
                    <div>{props.entrega.nomeCliente}</div>
                    <div className="date"><FontAwesomeIcon icon={faClock}/> {formatTime(props.entrega.dataEntrega)}</div>
                </div>
                <div className="row">
                    <div>
                        <div className="partida"><FontAwesomeIcon className="icon" icon={faDotCircle} />{props.entrega.pontoPartida}</div>
                        <div className="destino"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />{props.entrega.pontoDestino}</div>
                    </div>
                </div>
            </div>
        </>
    );
}