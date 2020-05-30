import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faDotCircle, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Item(props: any) {

    function formatTime(timeCreated: number) {
        var diff = Math.floor((Date.now() - timeCreated) / 1000);
        var interval:number = Math.floor(diff / 31536000);

        if (interval >= 1) {
            return interval + " anos";
        }
        interval = Math.floor(diff / 2592000);
        if (interval >= 1) {
            return interval + " meses";
        }
        interval = Math.floor(diff / 604800);
        if (interval >= 1) {
            return interval + " semanas";
        }
        interval = Math.floor(diff / 86400);
        if (interval >= 1) {
            return interval + "d";
        }
        interval = Math.floor(diff / 3600);
        if (interval >= 1) {
            return interval + "h";
        }
        interval = Math.floor(diff / 60);
        if (interval >= 1) {
            return interval + " m";
        }
        return "menos de 1 minuto";
    }


    return (
        <>
            <div className="item">
                <div className="title">
                    <div>{props.entrega.nomeCliente}</div>
                    <div><FontAwesomeIcon icon={faClock}/> {formatTime(props.entrega.dataEntrega)}</div>
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