import React, { useEffect, useState } from 'react'
import './styles.scss';
import { requestItem } from '../../Actions/ServerActions';
import Entrega from '../../Types/Entrega';
import Item from '../../Components/Item';
import Map from '../../Components/Map'

export default function Detalhe(props: any) {
    const [entrega, setEntrega] = useState<Entrega>();

    function didInit() {
        let id = props.match.params.id;
        if (id) {
            requestItem(id)
                .then(result => {
                    setEntrega(result);
                })
                .catch(err => {

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
        <div>
            {entrega ?
                <>
                    <Item entrega={entrega} />
                    <div className="map">
                        <Map></Map>
                    </div>
                </>
                : null}
        </div>
    )
}