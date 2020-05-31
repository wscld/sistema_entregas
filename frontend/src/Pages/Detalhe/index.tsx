import React, { useEffect, useState } from 'react'
import './styles.scss';
import { requestItem } from '../../Actions/ServerActions';
import Entrega from '../../Types/Entrega';
import Item from '../../Components/Item';
import Map from '../../Components/Map'
import ModalError from '../../Components/ModalError';


export default function Detalhe(props: any) {
    const [entrega, setEntrega] = useState<Entrega>();
    const [error, setError] = useState<string>("");

    function didInit() {
        let id = props.match.params.id;
        if (id) {
            requestItem(id)
                .then(result => {
                    setEntrega(result);
                })
                .catch(err => {
                    setError("Entrega não encontrada.")
                })
        }
    }

    function didFinish() {

    }

    useEffect(() => {
        didInit();
        return didFinish();
    }, [])



    return (
        <div className="container">
            <ModalError error={error} onDismiss={() => setError("")} visible={error != "" ? true : false}></ModalError>
            {entrega ?
                <>
                    <Item entrega={entrega} />
                    <div className="map">
                        <Map
                            origin={entrega.pontoPartida}
                            destination={entrega.pontoDestino}
                        />

                    </div>
                </>
                : null}
        </div>
    )
}